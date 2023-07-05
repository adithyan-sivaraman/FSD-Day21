/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React,{useState} from 'react';


function App() {

    const [buttons, setButtons] = useState([
        { id: 1, text: 'Add to cart' },
        { id: 2, text: 'Add to cart' },
        { id: 3, text: 'Add to cart' },
        { id: 4, text: 'Add to cart' },
        { id: 5, text: 'Add to cart' },
        { id: 6, text: 'Add to cart' },
        { id: 7, text: 'Add to cart' },
        // Add more objects for each product button
      ]);
      
    const handleClick = (buttonId) => {
        setButtons((prevButtons) =>
          prevButtons.map((button) => {
            if (button.id === buttonId) {
              const newText = button.text === 'Add to cart' ? 'Remove from cart' : 'Add to cart';
      
             
              return { ...button, text: newText };
            }
            return button;
          })
        );
      };
      
      const calculateCartCount = () => {
        return buttons.reduce((count, button) => {
          if (button.text === 'Remove from cart') {
            return count + 1;
          }
          return count;
        }, 0);
      };
    
      const cartCount = calculateCartCount();
  return (
    
    <div className="App">
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#"><b>Start Bootstrap</b></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Shop
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">All Products</a>
            <a className="dropdown-item" href="#">Popular Items</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">New Arrivals</a>
          </div>
        </li>
       
      </ul>

    </div>
    <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill" >{cartCount}</span> 
                        </button>
                        
  </nav>
   
    
  <header className="bg-dark py-5">
  <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
      </div>
  </div>
</header>
<section className="py-5">
<div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div className="col mb-5">
            <div className="card h-100">
                
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">Fancy Product</h5>
                        
                        $40.00 - $80.00
                    </div>
                </div>
                
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" >View options</a></div>
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
                
                <div className="badge bg-dark text-white position-absolute" >Sale</div>
               
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">Special Item</h5>
                        
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>
                        
                        <span className="text-muted text-decoration-line-through">$20.00</span>
                        $18.00
                    </div>
                </div>
                
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={() => handleClick(1)}> {buttons.find((button) => button.id === 1).text}</a></div>
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
                
                <div className="badge bg-dark text-white position-absolute" >Sale</div>
           
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">Sale Item</h5>
                        
                        <span className="text-muted text-decoration-line-through">$50.00</span>
                        $25.00
                    </div>
                </div>
                
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"   onClick={() => handleClick(2)}>  {buttons.find((button) => button.id === 2).text}</a></div>
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
         
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">Popular Item</h5>
                        
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>
                        
                        $40.00
                    </div>
                </div>
                
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={() => handleClick(3)}> {buttons.find((button) => button.id === 3).text}</a></div>
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
                
                <div className="badge bg-dark text-white position-absolute" >Sale</div>
                
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">Sale Item</h5>
                     
                        <span className="text-muted text-decoration-line-through">$50.00</span>
                        $25.00
                    </div>
                </div>
                
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"   onClick={() => handleClick(4)}> {buttons.find((button) => button.id === 4).text}</a></div>
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
                
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">Fancy Product</h5>
                      
                        $120.00 - $280.00
                    </div>
                </div>
                
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"   onClick={() => handleClick(5)}> {buttons.find((button) => button.id === 5).text}</a></div>
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
               
                <div className="badge bg-dark text-white position-absolute" >Sale</div>
                              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
               
                <div className="card-body p-4">
                    <div className="text-center">
                     
                        <h5 className="fw-bolder">Special Item</h5>
                     
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>
                        
                        <span className="text-muted text-decoration-line-through">$20.00</span>
                        $18.00
                    </div>
                </div>
         
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"   onClick={() => handleClick(6)}> {buttons.find((button) => button.id === 6).text}</a></div>
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
                
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                
                <div className="card-body p-4">
                    <div className="text-center">
                                               <h5 className="fw-bolder">Popular Item</h5>
                        
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>
                                       $40.00
                    </div>
                </div>
               
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"   onClick={() => handleClick(7)}> {buttons.find((button) => button.id === 7).text}</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    </div>
 
  );
}

export default App;
