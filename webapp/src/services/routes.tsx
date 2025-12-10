import { useAuthStore } from "../store/authstore";
import { createApi } from "./api";

export interface Route {
  id?: string;
  name?: string;
  path_prefix?: string;
  methods?: string[];
  headers?: Record<string, string>;
  query_params?: Record<string, string>;
  host?: string;
  upstreams: string[];
  enabled?: boolean | null;
  auth?: any;
  filters?: any[]; // if you want, I can model GenericFilter properly
  lb?:LB
}


export interface LB{
    strategy?:string;
    targets?:string[]
    state?:Record<string, TargetState>
}


export interface TargetState{
     healthy: boolean
    failCount: number
    test: boolean,
    lastFalure: string
}


export async function fetchAllRoutes(): Promise<Route[]> {
    const token=useAuthStore.getState().token
  return await createApi('/api/routes',{
    headers:{
        'Authorization':`Bearer ${token}`
    }
  })
}

export const fetchPlaygroundRoutes = async (): Promise<Route[]> => {
    const token=useAuthStore.getState().token
  return await createApi('/api/playground/routes',{
    headers:{
        'Authorization':`Bearer ${token}`
    }
  })
};



export const createRoute = async (route: Route): Promise<void> => {
    const token=useAuthStore.getState().token
  await createApi('/api/routes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${token}`
    },
    body: JSON.stringify(route),
  });
};

export const updateRoute = async (routeId: string, route: Route): Promise<void> => {
    const token=useAuthStore.getState().token
  await createApi(`/api/routes/${routeId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${token}`
    },
    body: JSON.stringify(route),
  });
}


export const deleteRoute = async (routeId: string): Promise<void> => {
    const token=useAuthStore.getState().token
  await createApi(`/api/routes/${routeId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${token}`
    }
  });
}