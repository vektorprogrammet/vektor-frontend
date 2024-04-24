interface ApplicationProps {
  applications: Application[];
}

interface Application {
  role: string;
  status: string;
  expectedAction: string;
}

const Applications = ({ applications }: ApplicationProps) => {
  return (
    <div className="flex flex-col justify-center mt-2">
      {applications.map((application) => {
        return (
          <div className="border-2 border-gray-200 shadow-md mt-4 max-w-lg mx-4 p-2 rounded-sm">
            <h1 className="text-2xl font-medium text-vektor-darblue mt-2">
              {application.role}
            </h1>
            <p className="text-gray-600 text-m font-medium mt-2">
              <span className="font-bold">Status:</span> {application.status}
            </p>
            <p className="text-gray-600 text-m font-medium my-2">
              <span className="font-bold">Forventet Handling:</span>{" "}
              {application.expectedAction}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Applications;
