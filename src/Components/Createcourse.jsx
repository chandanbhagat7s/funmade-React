import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import MainOut from "../layout/MainOut";
import axios from "axios";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    type: "",
    price: "",
    description: "",
    deliveredIn: "",
    charges: "",
    about: "",
    pheight: "",
    pbreadth: "",
    plength: "",
    f1: "",
    f2: "",
    f3: "",
    f4: "",
    f5: "",
    pay: "",
    summery: "",
    thumbnailCover: null,
    previewCover: "",
    preview1: "",
    preview2: "",
    preview3: "",
    thumbnail1: null,
    thumbnail2: null,
    thumbnail3: null,
    colors: "",
    Warranty: "",
    replacement: "",
  });
  console.log(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(product);
    e.preventDefault();
    const productdetails = {
      productName: product.name.toLowerCase(),
      discription: product.description,
      price: Number.parseInt(product.price),
      type: product.type.toLowerCase(),
      colors: product.colors.split(","),
      deliveredIn: product.deliveredIn,
      dileveryCharges: product.charges,
      paymentMethod: product.pay.split(","),
      warranty: product.Warranty,
      coverImage: product.thumbnailCover,
      summery: product.summery,
      about: product.about,
      features: [product.f1, product.f2, product.f3, product.f4, product.f5],
      // dim: [product.plength * 1, product.pbreadth * 1, product.pheight * 1],
      replacmentIn: product.replacement,
      // images: [product.thumbnai1, product.thumbnai2, product.thumbnai3],
    };
    console.log("Product Submitted:", productdetails);

    const form = new FormData();
    for (const key in productdetails) {
      // const value = product[key];
      // console.log(`Key: ${key}, Value: ${value}`);
      form.append(key, productdetails[key]);
    }
    // console.log(form);
    form.append("Images", product.thumbnail1);
    form.append("Images", product.thumbnail2);
    form.append("Images", product.thumbnail3);

    try {
      const res = await axios.post(
        "http://127.0.0.1:3000/api/v1/product",
        form
      );
      console.log("res is ", res);
      if (res.data.status && res.data.status == "success") {
        console.log(res.data.status, " Product added ");
        window.setTimeout(() => {
          // location.assign('/me')
        }, 1500);
      }
    } catch (err) {
      console.log(err);
      console.log(err.response.data.msg);
      // alertt("danger", err.response.data.msg);
    }
  };
  const handleImageUpload = (e) => {
    e.preventDefault();
    const uploadImage = e.target.files[0];
    if (uploadImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.addEventListener("load", function () {
        setProduct({
          ...product,
          thumbnailCover: uploadImage,
          previewCover: this.result,
        });
      });
    }
  };

  const handleImagesUpload = (e) => {
    e.preventDefault();
    const { name, of } = e.target;
    const uploadImage = e.target.files[0];
    if (uploadImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      console.log([of], [name]);
      fileReader.addEventListener("load", function () {
        setProduct({
          ...product,
          [of]: uploadImage,
          [name]: this.result,
        });
      });
    }
  };

  return (
    <MainOut>
      <div className="container my-5 rounded w-80 bg-secondary bg-opacity-50 p-5">
        <h2 className="my-3">Create Product</h2>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              {" "}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                  placeholder="Product Name"
                />
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="In Rs."
                  required
                />
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
                  value={product.type}
                  onChange={handleChange}
                  placeholder="Sofa,bed ..etc"
                  required
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              {" "}
              <div className="mb-3">
                <label htmlFor="about" className="form-label">
                  About
                </label>
                <textarea
                  className="form-control"
                  id="about"
                  name="about"
                  value={product.about}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mb-3">
                <label htmlFor="deliveredIn" className="form-label">
                  Will be delivered in (10days,5days...)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="deliveredIn"
                  name="deliveredIn"
                  value={product.deliveredIn}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <label htmlFor="charges" className="form-label">
                  Dilevery Charges (per KM)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="charges"
                  name="charges"
                  value={product.charges}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <label htmlFor="replacement" className="form-label">
                  Replacement in
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="replacement"
                  name="replacement"
                  value={product.replacement}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <label htmlFor="colors" className="form-label">
                  Available in Colors
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="colors"
                  name="colors"
                  value={product.colors}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <label htmlFor="Warranty" className="form-label">
                  Warranty
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Warranty"
                  name="Warranty"
                  value={product.Warranty}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
          </Row>
          <div>Dimentions </div>
          <Row>
            <Col>
              <div className="mb-3">
                <label htmlFor="plength" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="plength"
                  name="plength"
                  value={product.plength}
                  onChange={handleChange}
                  placeholder="Length (m)"
                  required
                />
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <label htmlFor="pbreadth" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="pbreadth"
                  name="pbreadth"
                  value={product.pbreadth}
                  onChange={handleChange}
                  required
                  placeholder="Breadth (m)"
                />
              </div>
            </Col>
            <Col>
              <div className="mb-3">
                <label htmlFor="pheight" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="pheight"
                  name="pheight"
                  value={product.pheight}
                  onChange={handleChange}
                  required
                  placeholder="Height (m)"
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="mb-3">
                <label htmlFor="features" className="form-label">
                  Features
                </label>
                {Array(5)
                  .fill("")
                  .map((el, i) => {
                    return (
                      <div className="my-2" key={i}>
                        <input
                          type="text"
                          className="form-control"
                          id="price"
                          name={`f${i}`}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          required
                        />
                      </div>
                    );
                  })}
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="mb-3">
                <label htmlFor="summery" className="form-label">
                  Summery
                </label>
                <textarea
                  className="form-control"
                  id="summery"
                  name="summery"
                  value={product.summery}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </Col>
            <Col>
              <div>
                <div className="mb-2">
                  <label htmlFor="features" className="form-label">
                    Payment Method
                  </label>
                </div>
                <div className="mx-3">
                  <input
                    className="mx-3"
                    type="checkbox"
                    id="price"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setProduct({
                          ...product,
                          pay: product.pay ? product.pay + ",Online" : "Online",
                        });
                      } else {
                        setProduct({
                          ...product,
                          pay: product.pay
                            ? product.pay.replace(/Online,|,Online|Online/, "")
                            : "",
                        });
                      }
                    }}
                    required
                  />
                  <label htmlFor="features" className="form-label">
                    Online
                  </label>
                </div>

                <div className="mx-3">
                  <input
                    className="mx-3"
                    type="checkbox"
                    id="price"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setProduct({
                          ...product,
                          pay: product.pay
                            ? product.pay + ",Cash on delivery"
                            : "Cash on delivery",
                        });
                      } else {
                        setProduct({
                          ...product,
                          pay: product.pay
                            ? product.pay.replace(
                                /Cash on delivery,|,Cash on delivery|Cash on delivery/,
                                ""
                              )
                            : "",
                        });
                      }
                    }}
                    required
                  />
                  <label htmlFor="features" className="form-label">
                    Cash On delivery
                  </label>
                </div>
              </div>
            </Col>
          </Row>

          <div className="mb-3">
            <label htmlFor="deliveredIn" className="form-label">
              Cover Image
            </label>
            <input
              type="file"
              className="form-control"
              id="deliveredIn"
              name="deliveredIn"
              required
              accept=".jpg, .jpeg, .png, .gif, .bmp, .svg"
              pattern="^.*\.(jpg|jpeg|png|gif|bmp|svg)$"
              onChange={handleImageUpload}
            />
          </div>
          <Row>
            <Col>
              {product.previewCover ? (
                <>
                  <img
                    src={product.previewCover}
                    style={{
                      width: "18rem",
                      height: "18rem",
                      backgroundSize: "contain",
                    }}
                  />
                </>
              ) : (
                ""
              )}
            </Col>
          </Row>

          <Row>
            <label htmlFor="preview1" className="form-label">
              Product Images
            </label>
            <Col>
              <input
                type="file"
                className="form-control"
                id="preview1"
                name="preview1"
                required
                accept=".jpg, .jpeg, .png, .gif, .bmp, .svg"
                pattern="^.*\.(jpg|jpeg|png|gif|bmp|svg)$"
                onChange={(e) => {
                  e.target.of = "thumbnail1";
                  handleImagesUpload(e);
                }}
              />
            </Col>
            <Col>
              <input
                type="file"
                className="form-control"
                id="preview2"
                name="preview2"
                required
                accept=".jpg, .jpeg, .png, .gif, .bmp, .svg"
                pattern="^.*\.(jpg|jpeg|png|gif|bmp|svg)$"
                onChange={(e) => {
                  e.target.of = "thumbnail2";
                  handleImagesUpload(e);
                }}
              />
            </Col>
            <Col>
              <input
                type="file"
                className="form-control"
                id="preview3"
                name="preview3"
                required
                accept=".jpg, .jpeg, .png, .gif, .bmp, .svg"
                pattern="^.*\.(jpg|jpeg|png|gif|bmp|svg)$"
                onChange={(e) => {
                  e.target.of = "thumbnail3";
                  handleImagesUpload(e);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {product.preview1 ? (
                <>
                  <img
                    src={product.preview1}
                    style={{
                      width: "18rem",
                      height: "18rem",
                      backgroundSize: "contain",
                    }}
                  />
                </>
              ) : (
                ""
              )}
            </Col>
            <Col>
              {product.preview2 ? (
                <>
                  <img
                    src={product.preview2}
                    style={{
                      width: "18rem",
                      height: "18rem",
                      backgroundSize: "contain",
                    }}
                  />
                </>
              ) : (
                ""
              )}
            </Col>
            <Col>
              {product.preview3 ? (
                <>
                  <img
                    src={product.preview3}
                    style={{
                      width: "18rem",
                      height: "18rem",
                      backgroundSize: "contain",
                    }}
                  />
                </>
              ) : (
                ""
              )}
            </Col>
          </Row>

          <button
            type="submit"
            className="btn btn-outline-dark m-2"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </form>
      </div>
    </MainOut>
  );
};

export default CreateProduct;
