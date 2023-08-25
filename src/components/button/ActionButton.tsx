type ActionButtonProps = {
    title: string;
    onClick: () => void;
    disabled: boolean;
}

const ActionButton = ({ title, onClick, disabled }: ActionButtonProps) => {
  return (
    <button
      className="m-2 p-2 w-2/5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:shadow-xl transition duration-200 ease-in-out"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default ActionButton;
