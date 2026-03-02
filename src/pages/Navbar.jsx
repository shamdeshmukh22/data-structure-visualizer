export default function Navbar() {
  return (
    <>
      <div className="container-fluid   bg-light h-100">
        <div className="row">
         <nav class="  col-md-12 fw-bolder navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="/">Data Structure</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/sorting">Sorting  <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/searching">searching </a>
      <a class="nav-item nav-link" href="/data-storing">data storing</a>
      <a class="nav-item nav-link " href="/question">Question</a>
    </div>
  </div>
</nav>
        </div>
      </div>
      
    </>
  );
}
