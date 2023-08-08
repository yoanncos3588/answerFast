import { Checkbox, Form } from "react-daisyui";

type Props = {
  handleChangeTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  slug: string;
  checked: boolean;
};

const ThemeCheckbox = ({ handleChangeTheme, name, slug, checked }: Props) => {
  return (
    <Form.Label
      title={name}
      className={`bg-neutral p-4 my-2 rounded-lg ${!checked && "opacity-50"}`}
    >
      <Checkbox checked={checked} onChange={handleChangeTheme} name={slug} />
    </Form.Label>
  );
};

export default ThemeCheckbox;
