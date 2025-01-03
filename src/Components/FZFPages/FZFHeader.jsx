import React from "react";

const FZFHeader = () => {
  return (
    <div>
      <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
          <h1 class="display-3 mb-3 animated slideInDown">404 Error</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a class="text-body" href="#">
                  Home
                </a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-body" href="#">
                  Pages
                </a>
              </li>
              <li class="breadcrumb-item text-dark active" aria-current="page">
                404 Error
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FZFHeader;
