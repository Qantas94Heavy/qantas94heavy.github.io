---
layout: default
---

## Portfolio

<p>Here are a few example of what I've done.</p>

<div class="col-lg-6">
  <h3>Programming</h3>

  <div class="row marketing">
    <h4><a href="https://github.com/Qantas94Heavy/binary-gtlf-utils">GLTF to BGLTF Converter</a></h4>

    This Node.js command line application allows users to easily convert GLTF files
    (e.g. created using the COLLADA2GLTF application) offline without the use of the Cesium online
    converter.
  </div>

  <div class="row marketing">
    <h4>Let It Yo!</h4>
    <img src="{{ site.baseurl }}/img/let-it-yo.png" alt="Screenshot of game" class="img-responsive">

    Let It Yo! was a game created for the Christmas festivities during an internship with
    <a href="http://warmpaper-design.com">Warmpaper Design</a> in 2014, utilising the HTML5 <code>&lt;canvas&gt;</code>
    feature to allow for animated graphics and gameplay.
  </div>

  <div class="row marketing">
    <h4><a href="https://github.com/Qantas94Heavy/autopilot-pp">Autopilot++</a></h4>

    Autopilot++ is a plugin for the <a href="http://www.gefs-online.com">GEFS-Online</a> flight simulator, bringing new functions
    to the GEFS autopilot such as vertical speed control, improved autopilot handling, ICAO great circle navigation and separate
    component controls.
  </div>
</div>

<div class="col-lg-6">
  <h3>Photography</h3>

  <div class="row marketing">
    Here are a few examples of some photographs I have taken. These can be reused under the
    <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons CC BY-SA 4.0</a>
    licence.
  </div>

  <div class="row marketing">
    <div id="photo-slider" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#photo-slider" data-slide-to="0" class="active"></li>
        <li data-target="#photo-slider" data-slide-to="1"></li>
        <li data-target="#photo-slider" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="{{ site.baseurl }}/img/img1-preview.jpeg"
              alt="Image of cyclist traversing Hong Kong's steep Route Twisk">
          <div class="carousel-caption">
            A cyclist traversing Hong Kong's steep Route Twisk
          </div>
        </div>
        <div class="item">
          <img src="{{ site.baseurl }}/img/img2-preview.jpeg"
              alt="Image of an empty road near a secluded beach">
          <div class="carousel-caption">
            An empty road near a secluded beach
          </div>
        </div>
        <div class="item">
          <img src="{{ site.baseurl }}/img/img3-preview.jpeg"
              alt="Image of NYC Subway station platform: South Ferry - Whitehall Street">
          <div class="carousel-caption">
            NYC Subway station platform: South Ferry - Whitehall Street
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>
