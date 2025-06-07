// 🔗 Base URL (default to localhost if not provided via environment)
export const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/V1";

// 📡 All API Endpoints
export const API_ENDPOINTS = {
  // AUTHENTICATION ROUTES
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  CHECK_AUTH: "/auth/check-auth",
  PROFILE: "/auth/profile",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: (token) => `/auth/reset-password/${token}`,
  DELETE_ACCOUNT: "/auth/delete-account",

  // EMPLOYEE ROUTES
  CREATE_EMPLOYEE: "/employees",
  GET_EMPLOYEES: "/employees",
  GET_EMPLOYEE_BY_ID: (id) => `/employees/${id}`,
  UPDATE_EMPLOYEE: (id) => `/employees/${id}`,
  DELETE_EMPLOYEE: (id) => `/employees/${id}`,

  // COMPANY ROUTES
  CREATE_COMPANY: "/companies",
  GET_COMPANIES: "/companies",
  GET_COMPANY_BY_ID: (id) => `/companies/${id}`,
  UPDATE_COMPANY: (id) => `/companies/${id}`,
  DELETE_COMPANY: (id) => `/companies/${id}`,

  // DEPARTMENT ROUTES
  CREATE_DEPARTMENT: "/departments",
  GET_DEPARTMENTS: "/departments",
  GET_DEPARTMENT_BY_ID: (id) => `/departments/${id}`,
  UPDATE_DEPARTMENT: (id) => `/departments/${id}`,
  DELETE_DEPARTMENT: (id) => `/departments/${id}`,

  // LEAVE REQUEST ROUTES
  APPLY_LEAVE: "/leaves",
  GET_ALL_LEAVES: "/leaves",
  GET_MY_LEAVES: "/leaves/mine",
  UPDATE_LEAVE_STATUS: (id) => `/leaves/${id}/status`,

  // ATTENDANCE ROUTES
  MARK_ATTENDANCE: "/attendance",
  GET_ALL_ATTENDANCE: "/attendance",
  GET_MY_ATTENDANCE: "/attendance/mine",

  // PAYROLL ROUTES
  GENERATE_PAYROLL: "/payroll",
  GET_ALL_PAYROLLS: "/payroll",
  GET_MY_PAYROLL: "/payroll/mine",
};

