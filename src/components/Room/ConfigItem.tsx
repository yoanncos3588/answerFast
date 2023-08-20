type Props = { label: string; value: string };

const ConfigItem = ({ label, value }: Props) => {
  return (
    <li className="mb-2">
      {label} : <span className=" text-accent">{value}</span>
    </li>
  );
};

export default ConfigItem;
