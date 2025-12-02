import { LucideIcon } from 'lucide-react';

export enum Page {
  DASHBOARD = 'Dashboard',
  ANALYTICS = 'Analytics',
  PROJECTS = 'Projects',
  TEAM = 'Team',
  DOCUMENTS = 'Documents',
  SETTINGS = 'Settings',
}

export interface NavItem {
  id: Page;
  label: string;
  icon: LucideIcon;
}

export interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
}

export interface Project {
  id: number;
  name: string;
  status: 'Active' | 'Completed' | 'Pending';
  dueDate: string;
  members: number;
}
