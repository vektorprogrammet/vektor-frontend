interface ProfileModalProps {
  imgUrl: string;
  name: string;
}

const ProfileModal = ({ imgUrl, name }: ProfileModalProps) => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src={imgUrl}
          alt="Aaryan"
          className="max-w-sm mt-2 rounded-full w-1/2"
        />
      </div>
      <p className=" text-gray-600 text-m font-medium mt-2">
        Du er logget inn som
      </p>
      <h2 className="text-2xl font-medium text-vektor-darblue pb-2">{name}</h2>
    </div>
  );
};

export default ProfileModal;
