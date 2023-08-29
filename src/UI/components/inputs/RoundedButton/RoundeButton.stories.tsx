import RoundedButton from "./RoundedButton";

import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "inputs/RoundedButton",
  component: RoundedButton
} as Meta<typeof RoundedButton>;

const Template: StoryFn<typeof RoundedButton> = (args) => <RoundedButton {...args}>Click</RoundedButton>

export const MeuNovoBotao = Template.bind({});
export const MeuNovoCor = Template.bind({});
MeuNovoCor.args = {
  variant: "contained",
}

// export const MeuBotao = () => <RoundedButton>Click</RoundedButton>
// export const MeuBotaoCor = () => <RoundedButton variant="contained">Click</RoundedButton>
