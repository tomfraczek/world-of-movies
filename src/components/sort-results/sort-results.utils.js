sortByYear = () => {
    this.setState({yearAsc: !this.state.yearAsc})
    const sorted = this.state.yearAsc ? this.state.results.sort((a, b) => a.Year - b.Year) : this.state.results.sort((a, b) => b.Year - a.Year);
    this.setState({results: sorted})
}

sortByTitle = () => {
    this.setState({titleAsc: !this.state.titleAsc})
    const sorted = this.state.titleAsc ? this.state.results.sort((a, b) => a.Title.localeCompare(b.Title)) : this.state.results.sort((a, b) => b.Title.localeCompare(a.Title));
    this.setState({results: sorted})
}

sortByType = () => {
    this.setState({typeAsc: !this.state.typeAsc})
    const sorted = this.state.typeAsc ? this.state.results.sort((a, b) => a.Type.localeCompare(b.Type)) : this.state.results.sort((a, b) => b.Type.localeCompare(a.Type));
    this.setState({results: sorted})
}