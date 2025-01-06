import { AbstractIntlMessages } from 'next-intl';

interface DashboardProps {
  messages: AbstractIntlMessages;
}

function Dashboard() {
  return <>Dashboard</>;
}

export type { DashboardProps };
export default Dashboard;
