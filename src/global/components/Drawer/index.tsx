import { Fragment, MouseEvent, useRef, useState } from 'react';
import * as Styles from './styles';

export function Drawer() {
	const [openDrawer, setOpenDrawer] = useState(false);

	const drawerRef = useRef<HTMLDivElement>(null);

	const handleOpenDrawer = () => setOpenDrawer(!openDrawer);

	const closeDrawer = (event: MouseEvent) => {
		if (drawerRef.current === event.target) {
			setOpenDrawer(false);
		}
	};

	return (
		<Fragment>
			<Styles.Icons onClick={handleOpenDrawer} data-testid="icons-group">
				{openDrawer ? (
					<Styles.CloseIcon data-testid="close-header-icon" />
				) : (
					<Styles.OpenIcon data-testid="open-header-icon" />
				)}
			</Styles.Icons>

			<Styles.Background
				ref={drawerRef}
				active={openDrawer}
				onClick={closeDrawer}
				data-testid="background"
			>
				<Styles.Wrapper active={openDrawer}>
					<Styles.HeadingDrawer>
						<Styles.Title>Menu</Styles.Title>
						<Styles.CloseIcon
							data-testid="close-icon"
							onClick={() => setOpenDrawer(false)}
						/>
					</Styles.HeadingDrawer>
				</Styles.Wrapper>
			</Styles.Background>
		</Fragment>
	);
}
