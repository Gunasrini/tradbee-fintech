function BusinessAddress() {
    return (
        <div>
            <h3>Business Address</h3>
            <form>
                <div className="col-md-12">
                    <div className="dashboard-form-row">
                        <div className="form-group">
                            <input type="text" className="form-control w-100" placeholder="Address" />
                        </div>
                    </div>
                    <div className="d-flex dashboard-form-row three-columns">
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="City" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-select form-control">
                                    <option>State</option>
                                    <option>Tamilnadu</option>
                                    <option>Andhra</option>
                                    <option>Kerala</option>
                                    <option>Karnataka</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Postal Code" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex dashboard-form-row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <span className="form-control-icon"><i className="fas fa-search"></i></span>
                                <input type="text" className="form-control" placeholder="Area" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label><strong>Property Ownership</strong></label>
                                <div className="radio-group">
                                    <label><input type="checkbox" /> <span>Owned</span></label>
                                    <label><input type="checkbox" />
                                        <span>Rented</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default BusinessAddress