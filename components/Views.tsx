import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  MoreHorizontal, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  File,
  Download,
  Filter,
  Plus,
  PieChart
} from 'lucide-react';
import { Project } from '../types';

// --- Dashboard View ---

const stats = [
  { label: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', trendUp: true },
  { label: 'Active Users', value: '2,338', trend: '+15.2%', trendUp: true },
  { label: 'Bounce Rate', value: '42.3%', trend: '-4.5%', trendUp: false }, // "Good" that it's down, but logically styled for visual interest
  { label: 'New Sales', value: '+573', trend: '+12.5%', trendUp: true },
];

const chartData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</h3>
              </div>
              <span className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
                stat.trendUp ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'
              }`}>
                {stat.trendUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
             <select className="text-sm border-gray-200 rounded-md text-gray-500 focus:ring-gray-500 focus:border-gray-500">
               <option>Last 7 days</option>
               <option>Last 30 days</option>
               <option>This Year</option>
             </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#111827" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#111827" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  itemStyle={{ color: '#111827' }}
                />
                <Area type="monotone" dataKey="value" stroke="#111827" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 border border-gray-200 mr-3">
                   <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New order #102{i}</p>
                  <p className="text-xs text-gray-500 mt-0.5">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Analytics View ---

const analyticsData = [
  { name: 'Jan', organic: 4000, referral: 2400 },
  { name: 'Feb', organic: 3000, referral: 1398 },
  { name: 'Mar', organic: 2000, referral: 9800 },
  { name: 'Apr', organic: 2780, referral: 3908 },
  { name: 'May', organic: 1890, referral: 4800 },
  { name: 'Jun', organic: 2390, referral: 3800 },
];

export const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Traffic Sources</h2>
        <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-md text-gray-600 hover:text-gray-900">Export</button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
              <Tooltip 
                 cursor={{fill: '#f9fafb'}}
                 contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="organic" name="Organic Search" fill="#1f2937" radius={[4, 4, 0, 0]} />
              <Bar dataKey="referral" name="Referral" fill="#9ca3af" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Bounce Rate', 'Session Duration', 'Pages / Session'].map((metric, i) => (
             <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 text-gray-600">
                    <PieChart className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">{metric}</h4>
                <p className="text-2xl font-bold text-gray-900">{i === 0 ? '32.4%' : i === 1 ? '2m 14s' : '4.2'}</p>
             </div>
        ))}
      </div>
    </div>
  );
};

// --- Projects View ---

const projects: Project[] = [
  { id: 1, name: 'Website Redesign', status: 'Active', dueDate: 'Oct 24, 2023', members: 5 },
  { id: 2, name: 'Mobile App Launch', status: 'Pending', dueDate: 'Nov 12, 2023', members: 8 },
  { id: 3, name: 'Marketing Campaign', status: 'Completed', dueDate: 'Sep 30, 2023', members: 3 },
  { id: 4, name: 'Internal Audit', status: 'Active', dueDate: 'Oct 15, 2023', members: 4 },
  { id: 5, name: 'Customer Feedback', status: 'Active', dueDate: 'Oct 28, 2023', members: 2 },
];

export const ProjectsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800">
                <Plus className="w-4 h-4" />
                New Project
            </button>
            <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-gray-900">
                <Filter className="w-4 h-4" />
            </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">
                                {project.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{project.name}</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${project.status === 'Active' ? 'bg-green-100 text-green-800' : 
                          project.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-gray-100 text-gray-800'}`}>
                        {project.status}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {project.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex -space-x-2 overflow-hidden">
                            {[...Array(Math.min(project.members, 4))].map((_, i) => (
                                <img key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={`https://picsum.photos/seed/${project.id + i}/50`} alt="" />
                            ))}
                            {project.members > 4 && <div className="flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-gray-100 text-xs text-gray-500">+{project.members - 4}</div>}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

// --- Team View ---
const teamMembers = [
  { name: 'Sarah Wilson', role: 'Product Manager', email: 'sarah.w@example.com' },
  { name: 'James Carter', role: 'Lead Developer', email: 'james.c@example.com' },
  { name: 'Emily Chen', role: 'UI/UX Designer', email: 'emily.c@example.com' },
  { name: 'Michael Brown', role: 'Frontend Engineer', email: 'michael.b@example.com' },
  { name: 'Lisa Ray', role: 'QA Specialist', email: 'lisa.r@example.com' },
  { name: 'David Smith', role: 'DevOps Engineer', email: 'david.s@example.com' },
];

export const TeamView: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <img src={`https://picsum.photos/seed/${i + 50}/150`} alt={member.name} className="w-20 h-20 rounded-full bg-gray-100 mb-4 object-cover" />
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                    <div className="flex gap-2 w-full mt-auto">
                        <button className="flex-1 px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
                            Profile
                        </button>
                        <button className="flex-1 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                            Message
                        </button>
                    </div>
                </div>
            ))}
             <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-300 hover:bg-gray-50 transition-all min-h-[250px]">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Plus className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">Add Team Member</h3>
             </div>
        </div>
    );
};

// --- Documents View ---

export const DocumentsView: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['Brand Guidelines', 'Q3 Report', 'Invoice Template', 'User Manual', 'API Docs', 'Assets'].map((doc, i) => (
                    <div key={i} className="group bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center aspect-square cursor-pointer hover:border-blue-500 hover:shadow-sm transition-all">
                        <File className="w-8 h-8 text-gray-300 mb-3 group-hover:text-blue-500 transition-colors" />
                        <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900">{doc}</span>
                        <span className="text-xs text-gray-400 mt-1">PDF • 2.4MB</span>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-base font-semibold text-gray-900">Recent Files</h3>
                </div>
                <div className="divide-y divide-gray-200">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                                    <File className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Project_Specs_v{i}.pdf</p>
                                    <p className="text-xs text-gray-500">Updated 2 days ago by Sarah</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <Download className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- Settings View ---

export const SettingsView: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Settings</h3>
        <div className="space-y-4">
           <div className="flex items-center space-x-4">
              <img src="https://picsum.photos/100/100" className="w-16 h-16 rounded-full bg-gray-200" alt="avatar" />
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Change Avatar</button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" defaultValue="Alex" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm p-2 border" />
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" defaultValue="Morgan" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm p-2 border" />
              </div>
           </div>
           <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" defaultValue="alex.morgan@nexus.com" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm p-2 border" />
           </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
        <div className="space-y-3">
            {['Email notifications', 'Push notifications', 'Monthly newsletter', 'Team updates'].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item}</span>
                    <button className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${i < 2 ? 'bg-gray-900' : 'bg-gray-200'}`}>
                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${i < 2 ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                </div>
            ))}
        </div>
      </div>

       <div className="flex justify-end space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800">Save Changes</button>
       </div>
    </div>
  );
};
