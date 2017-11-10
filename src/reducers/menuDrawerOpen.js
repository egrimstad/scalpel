const menuDrawerOpen = (state = false, action) => {
	switch(action.type) {
	case 'OPEN_MENU_DRAWER':
		return true
	case 'CLOSE_MENU_DRAWER':
		return false
	default:
		return state
	}
}

export default menuDrawerOpen