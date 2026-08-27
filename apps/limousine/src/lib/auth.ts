/** Role-based access for Iceland Limousine operations. */

export type StaffRole = 'owner' | 'admin' | 'dispatcher';

export type Permission =
  | 'inquiries:view'
  | 'inquiries:update_status'
  | 'inquiries:export_calendar'
  | 'inquiries:delete'
  | 'staff:manage';

const ROLE_PERMISSIONS: Record<StaffRole, Permission[]> = {
  owner: [
    'inquiries:view',
    'inquiries:update_status',
    'inquiries:export_calendar',
    'inquiries:delete',
    'staff:manage',
  ],
  admin: [
    'inquiries:view',
    'inquiries:update_status',
    'inquiries:export_calendar',
    'inquiries:delete',
    'staff:manage',
  ],
  dispatcher: [
    'inquiries:view',
    'inquiries:update_status',
    'inquiries:export_calendar',
  ],
};

export interface StaffUser {
  id: string;
  email: string;
  name: string;
  role: StaffRole;
  /** Plain password for local demo auth — override via VITE_STAFF_* in production wiring. */
  password: string;
}

export interface AuthSession {
  userId: string;
  email: string;
  name: string;
  role: StaffRole;
  loggedInAt: string;
}

const SESSION_KEY = 'iceland-limo-staff-session-v1';

/** Seed staff accounts — change passwords before production deploy. */
export const STAFF_DIRECTORY: StaffUser[] = [
  {
    id: 'owner-1',
    email: (import.meta.env.VITE_OWNER_EMAIL as string) || 'owner@icelandlimousine.com',
    name: 'Business Owner',
    role: 'owner',
    password: (import.meta.env.VITE_OWNER_PASSWORD as string) || 'IcelandOwner2026!',
  },
  {
    id: 'admin-1',
    email: (import.meta.env.VITE_ADMIN_EMAIL as string) || 'admin@icelandlimousine.com',
    name: 'Operations Admin',
    role: 'admin',
    password: (import.meta.env.VITE_ADMIN_PASSWORD as string) || 'IcelandAdmin2026!',
  },
  {
    id: 'dispatch-1',
    email: (import.meta.env.VITE_DISPATCHER_EMAIL as string) || 'dispatch@icelandlimousine.com',
    name: 'Dispatcher',
    role: 'dispatcher',
    password: (import.meta.env.VITE_DISPATCHER_PASSWORD as string) || 'IcelandDispatch2026!',
  },
];

export function roleLabel(role: StaffRole): string {
  switch (role) {
    case 'owner':
      return 'Owner';
    case 'admin':
      return 'Admin';
    case 'dispatcher':
      return 'Dispatcher';
  }
}

export function hasPermission(role: StaffRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function canAccessInquiries(role: StaffRole | null | undefined): boolean {
  if (!role) return false;
  return hasPermission(role, 'inquiries:view');
}

export function loadSession(): AuthSession | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as AuthSession;
    if (!session?.role || !session?.email) return null;
    if (!canAccessInquiries(session.role)) return null;
    return session;
  } catch {
    return null;
  }
}

export function saveSession(session: AuthSession) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}

export type LoginResult =
  | { ok: true; session: AuthSession }
  | { ok: false; error: string };

export function loginStaff(email: string, password: string): LoginResult {
  const normalized = email.trim().toLowerCase();
  const user = STAFF_DIRECTORY.find((u) => u.email.toLowerCase() === normalized);

  if (!user || user.password !== password) {
    return { ok: false, error: 'Invalid email or password.' };
  }

  if (!canAccessInquiries(user.role)) {
    return { ok: false, error: 'Your role cannot access inquiries.' };
  }

  const session: AuthSession = {
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    loggedInAt: new Date().toISOString(),
  };
  saveSession(session);
  return { ok: true, session };
}

export function logoutStaff() {
  clearSession();
}
