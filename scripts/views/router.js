const viewHome = (data) => {
  return `
    <div class="row">
    <div class="search">
      <input
        type="text"
        id="input-search"
        class="form-control"
        placeholder="nhập từ khoá tìm kiếm"
        aria-describedby="basic-addon1"
      />
      <div class="search_modal hide">
      </div>
    </div>
  </div>
  <div class="loading">
    <div id="loading-spiner" class="text-primary" role="status"></div>
  </div>

  <div id="items" class="row">
    <div class="col-md-3 col-sm-12">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
};

const viewDetail = (detail) => {
  console.log("detail", detail);
  return `<div>
      <div class="loading">
        <div id="loading-spiner" class="text-primary" role="status"></div>
      </div>
      <div id="items" class="row">
        <div class="col-md-3 col-sm-12">
          <div class="card shadow-sm">
            <img src=" ${detail.image}"/>
              <title>${detail.name}</title>
            <div class="card-body">
              <p class="card-text">
                ${detail.description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};
const view404 = () => {
  return `<div></h1>page not found </h1></div>`;
};
export const router = (path = "/", data = {}) => {
  switch (path) {
    case "/":
      return viewHome(data);
    case "/detail":
      return viewDetail(data);
    default:
      return view404();
  }
};