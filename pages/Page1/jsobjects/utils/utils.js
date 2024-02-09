export default {
	status: () => {
		const status = ['Released', 'Banned', 'Waiting']
		return status.map(s => ({label: s, value: s}))
	}
}