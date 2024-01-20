function Documents() {
    return (
        <div className="documents-section">
            <h3>Documents</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link active" data-bs-toggle="tab" href="#CIN">CIN</a>
                    <i className="far fa-clock"></i>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link" data-bs-toggle="tab" href="#MOA">MOA</a>
                    <i className="far fa-clock"></i>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link" data-bs-toggle="tab" href="#AOA">AOA</a>
                    <i className="far fa-clock"></i>
                </li>
            </ul>
            <form>
                <div className="col-md-12 tab-content">
                    <div id="CIN" className="tab-pane active">
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-select form-control">
                                        <option>Select Document Type</option>
                                        <option>Certificate of Incorporation (CIN)</option>
                                        <option>Memorandum of Association (MOA)</option>
                                        <option>Articles of Association (AOA)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                        placeholder="Document Number" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <span className="form-control-icon"><i
                                        className="fas fa-calendar-alt"></i></span>
                                    <input type="text" className="form-control"
                                        placeholder="Document Issue Date" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="form-group">
                                <input type="file" className="form-control file-upload-control" />
                            </div>
                        </div>
                    </div>
                    <div id="MOA" className="tab-pane">
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-select form-control">
                                        <option>Memorandum of Association (MOA)</option>
                                        <option>Certificate of Incorporation (CIN)</option>
                                        <option>Articles of Association (AOA)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                        placeholder="UXYZZEF546897852" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="form-group">
                                <input type="file" className="form-control file-upload-control" />
                            </div>
                        </div>
                    </div>
                    <div id="AOA" className="tab-pane">
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-select form-control">
                                        <option>Articles of Association (AOA)</option>
                                        <option>Memorandum of Association (MOA)</option>
                                        <option>Certificate of Incorporation (CIN)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                        placeholder="UXYZZEF5468972" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="form-group">
                                <input type="file" className="form-control file-upload-control" />
                            </div>
                        </div>
                        <div className="documents-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Last Edited</th>
                                        <th>Editor</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i className="fas fa-clipboard"></i> Certificate of
                                            Incorporation (CIN)</td>
                                        <td>19/09/2023 <span>5.30 PM</span></td>
                                        <td><img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                            alt="" className="avatar-img" /></td>
                                        <td>
                                            <div className="icons">
                                                <i className="fas fa-eye"></i>
                                                <i className="fas fa-pencil-alt"></i>
                                                <i className="fas fa-trash"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="fas fa-clipboard"></i> Memorandum of
                                            Association (MOA)</td>
                                        <td>19/09/2023 <span>5.30 PM</span></td>
                                        <td><img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                            alt="" className="avatar-img" /></td>
                                        <td>
                                            <div className="icons">
                                                <i className="fas fa-eye"></i>
                                                <i className="fas fa-pencil-alt"></i>
                                                <i className="fas fa-trash"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="fas fa-clipboard"></i> Articles of Association
                                            (AOA)</td>
                                        <td>19/09/2023 <span>5.30 PM</span></td>
                                        <td><img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                            alt="" className="avatar-img" /></td>
                                        <td>
                                            <div className="icons">
                                                <i className="fas fa-eye"></i>
                                                <i className="fas fa-pencil-alt"></i>
                                                <i className="fas fa-trash"></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-12 form-add-button">
                        <button type="button" className="btn btn-secondary me-5">Skip</button>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Documents