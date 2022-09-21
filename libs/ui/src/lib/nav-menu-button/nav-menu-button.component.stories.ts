import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavMenuButtonComponent } from './nav-menu-button.component';

export default {
	title: 'NavMenuButtonComponent',
	component: NavMenuButtonComponent,
	decorators: [
		moduleMetadata({
			imports: [],
		})
	],
} as Meta<NavMenuButtonComponent>;

const Template: Story<NavMenuButtonComponent> = (args: NavMenuButtonComponent) => ({
	props: args,
});


export const Primary = Template.bind({});
Primary.args = {
	navItem: {
		title: 'Home',
		route: '/home',
	},
	variant: 'primary',
};
