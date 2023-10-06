import React from "react";
const EditCourse = () => {
  return (
    <>
      <div className="container-fluid mt-4">

              <div
                className="card-header bg-light" /* style={{ backgroundColor: 'white' }} */
              >
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Edit Course</h4>
                  </div>
                </div>
              </div>
              <div className="card-body pt-3">
              <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 ">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Category:
                <span className="text-danger">*</span>
              </label>
              <select className="form-select" id="sel1" name="sellist1">
      <option>Please Select</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Sub Category:
                <span className="text-danger">*</span>
              </label>
              <select className="form-select" id="sel1" name="sellist1">
      <option>Please Select</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Child Category:
                <span className="text-danger">*</span>
              </label>
              <select className="form-select" id="sel1" name="sellist1">
      <option>Please Select</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                User:
                <span className="text-danger">*</span>
              </label>
              <select className="form-select" id="sel1" name="sellist1">
      <option>Please Select</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Language
                <span className="text-danger">*</span>
              </label>
              <select className="form-select" id="sel1" name="sellist1">
      <option>Please Select</option>
      <option>English</option>
      <option>3</option>
      <option>4</option>
    </select>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Title
                <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control "
                autoComplete="off"
                placeholder="Please Enter Your Title"
                required
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Short Detail:
                <span className="text-danger">*</span>
              </label>
              <textarea className="form-control" rows="3" id="shortDetails" name="text" placeholder="Enter your details"></textarea>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Requirement:
                <span className="text-danger">*</span>
              </label>
              <textarea className="form-control" rows="3" id="requirement" name="text" placeholder="Enter requirements"></textarea>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Detail:
                <span className="text-danger">*</span>
              </label>
              <textarea className="form-control" rows="3" id="detail" name="text" placeholder="Enter your detail"></textarea>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Upload Video:
                <span className="text-danger">*</span>
              </label>
             <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter video url"/>
             </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Preview Image:
                <span className="text-danger">*</span>
              </label>
             <div className="input-group">
                <input type="file" className="form-control" placeholder="Enter video url"/>
             </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Moneyback Guarantee:
                <span className="text-danger">*</span>
              </label>
              <br/>
              <button className="btn btn-danger">No</button>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Free:
                <span className="text-danger">*</span>
              </label>
              <br/>
              <button className="btn btn-danger">Free</button>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Featured:
                <span className="text-danger">*</span>
              </label>
              <br/>
              <button className="btn btn-danger">OFF</button>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 mt-4 mt-lg-0">
            <div className="form-group form-group-sm">
              <label className="control-label fw-bold">
                Status:
                <span className="text-danger">*</span>
              </label>
              <br/>
              <button className="btn btn-danger">Disactive</button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6 mt-3 ">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              //   onClick={handleAddCourseForm}
            >
              Save
            </button>
          </div>
        </div>
              </div>
           
           
      </div>
     
    </>
  );
};

export default EditCourse;
