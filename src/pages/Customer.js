const Customer = () => {
    return (
        <>
            <div className="box position-absolute top-50 start-50 translate-middle">
            <button type="button" class="btn btn-primary mb-5 btn-lg">+ Add</button>  
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">#</th>
                            <th class="text-center" scope="col">Name</th>
                            <th class="text-center" scope="col">Address</th>
                            <th class="text-center" scope="col">Salary</th>
                            <th class="text-end" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th class="text-center" scope="row">1</th>
                            <td class="text-center" >Mark</td>
                            <td class="text-center">Otto</td>
                            <td class="text-center">@mdo</td>
                            <td class="text-end">
                                <button type="button" class="btn btn-outline-primary me-3">Edit</button>
                                <button type="button" class="btn btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Customer;