import { ChartBarIcon, DocumentTextIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
const States = () => {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-2 mb-4">
        <DocumentTextIcon className="h-6 w-6 text-blue-600" />
        <h3 className="text-gray-600">Units Processed</h3>
      </div>
      <p className="text-3xl font-bold">2,575</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-2 mb-4">
        <CheckCircleIcon className="h-6 w-6 text-blue-600" />
        <h3 className="text-gray-600">Units Passed</h3>
      </div>
      <p className="text-3xl font-bold">814</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-2 mb-4">
        <XCircleIcon className="h-6 w-6 text-blue-600" />
        <h3 className="text-gray-600">Units Rejected</h3>
      </div>
      <p className="text-3xl font-bold">12</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-2 mb-4">
        <ChartBarIcon className="h-6 w-6 text-blue-600" />
        <h3 className="text-gray-600">Throughput (Units/Minute)</h3>
      </div>
      <p className="text-3xl font-bold">110.41</p>
    </div>
  </div>


  );
};

export default States;
