import Display from './display';

function Header() {
  return (

    <div className="container">
      <div className="row">
        <div class="input-group mt-3  col-8">
          <input type="text" class="form-control" placeholder="Enter the item to Search" aria-label="Enter the item to Search" />
          <div class="input-group-append ">
            <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </div>
      <Display />
    </div>
  );
}

export default Header;
