import { LucideSearch, LucideUsers, LucideBarChart2, LucideBell, LucideShield, LucideDownload, LucideClock, LucideMessageCircle, LucideLayoutDashboard, LucideLink } from 'lucide-react';

const features = [
  {
    category: 'API Authorization',
    items: [
      { icon: <LucideMessageCircle size={20} />, title: 'Discussions' },
      { icon: <LucideLayoutDashboard size={20} />, title: 'Team views' },
      { icon: <LucideSearch size={20} />, title: 'Powerful search' },
    ],
  },
  {
    category: 'User Management',
    items: [
      { icon: <LucideBarChart2 size={20} />, title: 'Analytics' },
      { icon: <LucideBell size={20} />, title: 'Notifications' },
      { icon: <LucideLink size={20} />, title: 'Integrations' },
    ],
  },
  {
    category: 'Standard Security',
    items: [
      { icon: <LucideShield size={20} />, title: 'Privacy' },
      { icon: <LucideDownload size={20} />, title: 'Data export' },
      { icon: <LucideClock size={20} />, title: 'Real-time sync' },
    ],
  },
];

export default function WhyTrustUs() {
  return (
    <section className="bg-[#0E1321] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Why trust us?
          </span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-3xl">
          Many desktop publishing packages and web page editors now use lorem ipsum as their default model text, and a search will uncover many web sites still in their infancy.
        </p>

        {features.map((group, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-sm text-purple-400 font-semibold mb-6">{group.category}</h3>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, j) => (
                <div key={j} className="flex items-start space-x-4">
                  <div className="text-purple-300 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">
                      Login box must find the right balance for the user convenience, privacy and security.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}