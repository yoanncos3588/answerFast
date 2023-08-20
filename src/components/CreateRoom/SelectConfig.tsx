import { Select } from "react-daisyui";

type Props = {
  label: string;
  defaultValue: string;
  name: string;
  options: Array<string | number>;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectConfig = ({
  label,
  defaultValue,
  name,
  options,
  handleChange,
}: Props) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <Select defaultValue={defaultValue} onChange={handleChange} name={name}>
        {options.map((o, index) => (
          <option key={index}>{o}</option>
        ))}
      </Select>
    </>
  );
};

export default SelectConfig;
