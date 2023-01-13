<template>
  <div class="">
    <b-card>
      <h2>Your Profile Is Hidden</h2>

      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-radio-group
          id="radio-group-2"
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="radio-sub-component"
        >
          <b-form-radio value="public">Anyone can see you</b-form-radio>
          <b-form-radio value="private">No one can see you</b-form-radio>
          <b-form-radio value="choose"
            >Choose who sees you
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              /></svg
          ></b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <vue-autosuggest
        v-if="selected === 'choose' && locked === false"
        class="autosuggest"
        :input-props="{
          id: 'autosuggest__input',
          class: 'form-control custom-field',
          placeholder: 'Search By Profile Name',
        }"
        :suggestions="filteredOptions"
        :render-suggestion="renderSuggestion"
        :get-suggestion-value="getSuggestionValue"
        :limit="6"
        @selected="onAutosuggestSelected"
        @input="onAutoSuggestInputChange"
      ></vue-autosuggest>

      <b-modal id="discretionModal" size="xl" hide-footer hide-header>
        <div class="header">
          <h2 class="text-center">
            <svg
              data-name="004_ROMANTIC"
              height="24"
              fill="#fff"
              stroke="#fff"
              id="_004_ROMANTIC"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path
                d="M12,21.373c-1.3848-.0009-3.5459-1.6816-4.1748-2.1967a1,1,0,0,1,1.2666-1.5479,7.9269,7.9269,0,0,0,2.9121,1.7446c1.2388-.0585,8.2847-5.1572,8.2847-10.9296a6.51232,6.51232,0,0,0-.25-1.795A3.68093,3.68093,0,0,0,16.5059,4a3.88135,3.88135,0,0,0-3.5772,2.7446,1.00008,1.00008,0,0,1-1.8569,0A3.88183,3.88183,0,0,0,7.4946,4,3.68213,3.68213,0,0,0,3.9614,6.6479a6.53976,6.53976,0,0,0-.2495,1.7955A10.92826,10.92826,0,0,0,6.4194,14.939a.99969.99969,0,1,1-1.5566,1.2548A12.86383,12.86383,0,0,1,1.7119,8.4434a8.52867,8.52867,0,0,1,.3267-2.3448A5.69047,5.69047,0,0,1,7.4946,2,5.54221,5.54221,0,0,1,12,4.3271,5.54243,5.54243,0,0,1,16.5059,2a5.68914,5.68914,0,0,1,5.4555,4.0981,8.50628,8.50628,0,0,1,.3272,2.3453C22.2886,15.2607,14.3735,21.373,12,21.373Z"
                style="fill: #fff"
              />
              <circle cx="12" cy="11" r="2" style="fill: #fff" />
              <path
                d="M12,16a1.00011,1.00011,0,0,1-1-1V12a1,1,0,0,1,2,0v3A1.00011,1.00011,0,0,1,12,16Z"
                style="fill: #fff"
              />
            </svg>
            How Does Discretion Mode Works ?
          </h2>
        </div>
        <div class="body">
          <!-- 1 -->
          <div class="info">
            <p class="title">The Performance of Discretion modes</p>
            <div class="image image-1">
              <svg
                viewBox="0 0 318.13 337.39"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="Layer 2" id="Layer_2">
                  <g data-name="Layer 1" id="Layer_1-2">
                    <path
                      class="cls-1"
                      d="M295.38,133.12s-14.83-10-39.7-15.78a62.18,62.18,0,1,0-68.88,0c-12,2.87-21,6.22-27.74,9.57-3.35-31.57-29.66-56.44-62.18-56.44A62.11,62.11,0,0,0,62.44,184.3c-24.87,5.74-39.7,15.78-39.7,15.78C13.65,205.34,6,217.78,6,228.3v62.18a19.19,19.19,0,0,0,19.13,19.13h143.5a19.19,19.19,0,0,0,19.13-19.13V242.65H293a19.19,19.19,0,0,0,19.13-19.13V161.34C312.13,150.81,305,137.9,295.38,133.12Z"
                    />
                    <path
                      class="cls-2"
                      d="M309.62,161.34v62.18a19.19,19.19,0,0,1-19.13,19.13H185.26v47.84a19.2,19.2,0,0,1-19.15,19.13H22.62A19.18,19.18,0,0,1,3.49,290.49V264.34c8,3.11,16.67,4.74,25.19,6.29,32.42,5.83,70.1,9.46,94.27-12.91,11.37-10.51,18.3-25.81,31.62-33.69s29.66-6.59,44.92-8.51c37.25-4.67,69.84-29.66,90.44-61a178.23,178.23,0,0,0,9.59-16.45C305.58,144.2,309.62,153.43,309.62,161.34Z"
                    />
                    <path
                      class="cls-3"
                      d="M168.63,318.13H25.13A25.16,25.16,0,0,1,0,293V230.81C0,218.54,8.58,204,19.56,197.5c1.6-1.06,12.31-7.87,29.91-13.38A68.16,68.16,0,0,1,96.88,67a68.55,68.55,0,0,1,66.83,53.79q4.73-1.9,10.15-3.59a68.18,68.18,0,1,1,94.79,0c17.11,5.36,27.71,12,29.76,13.28,11.08,5.75,19.72,20.34,19.72,33.41V226A25.16,25.16,0,0,1,293,251.16H193.76V293A25.16,25.16,0,0,1,168.63,318.13ZM96.88,79A56.25,56.25,0,0,0,40.7,135.15a55.6,55.6,0,0,0,25,46.64l11.73,7.71-13.67,3.16C40.45,198,26.24,207.47,26.1,207.56l-.35.22C18.3,212.1,12,222.64,12,230.81V293a13.15,13.15,0,0,0,13.13,13.13h143.5A13.15,13.15,0,0,0,181.76,293V239.16H293A13.15,13.15,0,0,0,306.13,226V163.85c0-8.6-6.27-19.28-13.42-22.85l-.35-.18-.32-.22c-.22-.14-14.41-9.54-37.69-14.91l-13.67-3.16,11.73-7.71a55.59,55.59,0,0,0,25-46.64,56.18,56.18,0,1,0-112.36,0,55.59,55.59,0,0,0,25,46.64l11.59,7.61-13.48,3.24a125.57,125.57,0,0,0-26.46,9.1L154,138.64l-.91-8.6A56.67,56.67,0,0,0,96.88,79Z"
                    />
                    <path
                      class="cls-4"
                      d="M86.85,96.87a42.57,42.57,0,0,1,17-2.25c3.85.28,3.84-5.72,0-6a47,47,0,0,0-18.59,2.46c-3.64,1.23-2.08,7,1.6,5.79Z"
                    />
                    <path
                      class="cls-4"
                      d="M76.75,168.75a42.23,42.23,0,0,1-17.17-30.13c-1.28-13.05,3.87-25,13.49-33.67,2.87-2.6-1.39-6.83-4.24-4.24-22.26,20.17-19.35,55.92,4.89,73.22,3.15,2.25,6.15-3,3-5.18Z"
                    />
                    <path class="cls-5" d="M73.75,100.17" />
                    <path
                      class="cls-6"
                      d="M168.33,336.34s86.83-43.41,86.83-108.54V141l-86.83-21.71L81.51,141v86.83C81.51,292.93,168.33,336.34,168.33,336.34Z"
                    />
                    <path
                      class="cls-7"
                      d="M255.16,186.56v36.29c0,65.13-86.83,108.54-86.83,108.54S81.51,288,81.51,222.86V186.56c0,65.13,86.82,108.54,86.82,108.54S255.16,251.69,255.16,186.56Z"
                    />
                    <path
                      class="cls-3"
                      d="M168.33,337.39,165.65,336A234.93,234.93,0,0,1,121,305.35c-29.74-26-45.46-54.8-45.46-83.21V130.63l92.83-23.21,92.83,23.21v91.51c0,28.41-15.72,57.18-45.46,83.21A234.93,234.93,0,0,1,171,336ZM87.51,140v82.14c0,54.45,66.51,93.89,80.83,101.74,14.3-7.86,80.83-47.37,80.83-101.74V140l-80.83-20.21Z"
                    />
                    <text class="cls-8" transform="translate(150.15 274.66)" />
                  </g>
                </g>
              </svg>
            </div>
            <p class="subtitle">
              It makes your profile 100% unseen or hidden while you explore and
              see different profiles for just $9.99 or more monthly.
              <br />
              If you want to show your profile, set things moving!
            </p>
          </div>
          <!-- 2 -->
          <div class="info">
            <p class="title">Manage who can view your profile</p>

            <div class="image image-3">
              <svg
                height="100"
                id="svg2"
                version="1.1"
                viewBox="0 0 32 32.000001"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:svg="http://www.w3.org/2000/svg"
              >
                <defs id="defs4" />
                <g id="layer1" transform="translate(0,-1020.3622)">
                  <g id="g50552" transform="translate(1291.0063,604.30777)">
                    <g id="g50548">
                      <path
                        d="m -1278.7566,416.80424 c -6.3454,0 -11.5,5.15465 -11.5,11.5 0,6.34535 5.1546,11.5 11.5,11.5 6.3453,0 11.5,-5.15465 11.5,-11.5 0,-6.34535 -5.1547,-11.5 -11.5,-11.5 z"
                        id="path50526"
                        style="
                          color: #000000;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: normal;
                          font-stretch: normal;
                          font-size: medium;
                          line-height: normal;
                          font-family: sans-serif;
                          font-variant-ligatures: normal;
                          font-variant-position: normal;
                          font-variant-caps: normal;
                          font-variant-numeric: normal;
                          font-variant-alternates: normal;
                          font-feature-settings: normal;
                          text-indent: 0;
                          text-align: start;
                          text-decoration: none;
                          text-decoration-line: none;
                          text-decoration-style: solid;
                          text-decoration-color: #000000;
                          letter-spacing: normal;
                          word-spacing: normal;
                          text-transform: none;
                          writing-mode: lr-tb;
                          direction: ltr;
                          text-orientation: mixed;
                          dominant-baseline: auto;
                          baseline-shift: baseline;
                          text-anchor: start;
                          white-space: normal;
                          shape-padding: 0;
                          clip-rule: nonzero;
                          display: inline;
                          overflow: visible;
                          visibility: visible;
                          opacity: 1;
                          isolation: auto;
                          mix-blend-mode: normal;
                          color-interpolation: sRGB;
                          color-interpolation-filters: linearRGB;
                          solid-color: #000000;
                          solid-opacity: 1;
                          vector-effect: none;
                          fill: #586597;
                          fill-opacity: 1;
                          fill-rule: nonzero;
                          stroke: none;
                          stroke-width: 0.99999994;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-dashoffset: 0;
                          stroke-opacity: 1;
                          color-rendering: auto;
                          image-rendering: auto;
                          shape-rendering: auto;
                          text-rendering: auto;
                          enable-background: accumulate;
                        "
                      />
                      <path
                        d="m -1278.7566,417.80424 c 5.8049,0 10.5,4.69509 10.5,10.5 0,5.80491 -4.6951,10.5 -10.5,10.5 -5.8049,0 -10.5,-4.69509 -10.5,-10.5 0,-5.80491 4.6951,-10.5 10.5,-10.5 z"
                        id="path50528"
                        style="
                          color: #000000;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: normal;
                          font-stretch: normal;
                          font-size: medium;
                          line-height: normal;
                          font-family: sans-serif;
                          font-variant-ligatures: normal;
                          font-variant-position: normal;
                          font-variant-caps: normal;
                          font-variant-numeric: normal;
                          font-variant-alternates: normal;
                          font-feature-settings: normal;
                          text-indent: 0;
                          text-align: start;
                          text-decoration: none;
                          text-decoration-line: none;
                          text-decoration-style: solid;
                          text-decoration-color: #000000;
                          letter-spacing: normal;
                          word-spacing: normal;
                          text-transform: none;
                          writing-mode: lr-tb;
                          direction: ltr;
                          text-orientation: mixed;
                          dominant-baseline: auto;
                          baseline-shift: baseline;
                          text-anchor: start;
                          white-space: normal;
                          shape-padding: 0;
                          clip-rule: nonzero;
                          display: inline;
                          overflow: visible;
                          visibility: visible;
                          opacity: 1;
                          isolation: auto;
                          mix-blend-mode: normal;
                          color-interpolation: sRGB;
                          color-interpolation-filters: linearRGB;
                          solid-color: #000000;
                          solid-opacity: 1;
                          vector-effect: none;
                          fill: #ffffff;
                          fill-opacity: 1;
                          fill-rule: nonzero;
                          stroke: none;
                          stroke-width: 0.99999994;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-dashoffset: 0;
                          stroke-opacity: 1;
                          color-rendering: auto;
                          image-rendering: auto;
                          shape-rendering: auto;
                          text-rendering: auto;
                          enable-background: accumulate;
                        "
                      />
                      <circle
                        cx="-1278.7568"
                        cy="428.30402"
                        id="circle50530"
                        r="8.75"
                        style="
                          opacity: 1;
                          fill: #d7edf2;
                          fill-opacity: 1;
                          stroke: none;
                          stroke-width: 1.18489587;
                          stroke-opacity: 1;
                        "
                      />
                      <path
                        d="m -1277.5203,419.39018 c -3.1606,-0.43622 -6.4243,0.83327 -8.4356,3.51367 -2.6815,3.57382 -2.3317,8.58334 0.8204,11.75 3.152,3.16663 8.1599,3.54007 11.7461,0.875 3.5861,-2.66511 4.6737,-7.56854 2.5507,-11.5 a 0.50004997,0.50004997 0 1 0 -0.8789,0.47461 c 1.8905,3.50077 0.9258,7.8495 -2.2675,10.22266 -3.1933,2.37311 -7.6347,2.04238 -10.4415,-0.77735 -2.8067,-2.81975 -3.1182,-7.263 -0.7304,-10.44531 2.3878,-3.18235 6.7423,-4.12725 10.2344,-2.2207 a 0.50004997,0.50004997 0 1 0 0.4785,-0.87696 c -0.9804,-0.53527 -2.0227,-0.87022 -3.0762,-1.01562 z"
                        id="path50532"
                        style="
                          color: #000000;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: normal;
                          font-stretch: normal;
                          font-size: medium;
                          line-height: normal;
                          font-family: sans-serif;
                          font-variant-ligatures: normal;
                          font-variant-position: normal;
                          font-variant-caps: normal;
                          font-variant-numeric: normal;
                          font-variant-alternates: normal;
                          font-feature-settings: normal;
                          text-indent: 0;
                          text-align: start;
                          text-decoration: none;
                          text-decoration-line: none;
                          text-decoration-style: solid;
                          text-decoration-color: #000000;
                          letter-spacing: normal;
                          word-spacing: normal;
                          text-transform: none;
                          writing-mode: lr-tb;
                          direction: ltr;
                          text-orientation: mixed;
                          dominant-baseline: auto;
                          baseline-shift: baseline;
                          text-anchor: start;
                          white-space: normal;
                          shape-padding: 0;
                          clip-rule: nonzero;
                          display: inline;
                          overflow: visible;
                          visibility: visible;
                          opacity: 1;
                          isolation: auto;
                          mix-blend-mode: normal;
                          color-interpolation: sRGB;
                          color-interpolation-filters: linearRGB;
                          solid-color: #000000;
                          solid-opacity: 1;
                          vector-effect: none;
                          fill: #586597;
                          fill-opacity: 1;
                          fill-rule: nonzero;
                          stroke: none;
                          stroke-width: 0.99999994;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-dashoffset: 0;
                          stroke-opacity: 1;
                          color-rendering: auto;
                          image-rendering: auto;
                          shape-rendering: auto;
                          text-rendering: auto;
                          enable-background: accumulate;
                        "
                      />
                      <path
                        d="m -1278.7566,425.05424 c -1.5417,0 -2.9847,0.74304 -4.0586,1.45898 -1.0739,0.71595 -1.7949,1.4375 -1.7949,1.4375 a 0.50004997,0.50004997 0 0 0 0,0.70704 c 0,0 0.721,0.72155 1.7949,1.4375 1.0739,0.71594 2.5169,1.45898 4.0586,1.45898 1.5416,0 2.9846,-0.74304 4.0586,-1.45898 1.0739,-0.71595 1.7949,-1.4375 1.7949,-1.4375 a 0.50004997,0.50004997 0 0 0 0,-0.70704 c 0,0 -0.721,-0.72155 -1.7949,-1.4375 -1.074,-0.71594 -2.517,-1.45898 -4.0586,-1.45898 z"
                        id="path50534"
                        style="
                          color: #000000;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: normal;
                          font-stretch: normal;
                          font-size: medium;
                          line-height: normal;
                          font-family: sans-serif;
                          font-variant-ligatures: normal;
                          font-variant-position: normal;
                          font-variant-caps: normal;
                          font-variant-numeric: normal;
                          font-variant-alternates: normal;
                          font-feature-settings: normal;
                          text-indent: 0;
                          text-align: start;
                          text-decoration: none;
                          text-decoration-line: none;
                          text-decoration-style: solid;
                          text-decoration-color: #000000;
                          letter-spacing: normal;
                          word-spacing: normal;
                          text-transform: none;
                          writing-mode: lr-tb;
                          direction: ltr;
                          text-orientation: mixed;
                          dominant-baseline: auto;
                          baseline-shift: baseline;
                          text-anchor: start;
                          white-space: normal;
                          shape-padding: 0;
                          clip-rule: nonzero;
                          display: inline;
                          overflow: visible;
                          visibility: visible;
                          opacity: 1;
                          isolation: auto;
                          mix-blend-mode: normal;
                          color-interpolation: sRGB;
                          color-interpolation-filters: linearRGB;
                          solid-color: #000000;
                          solid-opacity: 1;
                          vector-effect: none;
                          fill: #586597;
                          fill-opacity: 1;
                          fill-rule: nonzero;
                          stroke: none;
                          stroke-width: 0.99999994;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-dashoffset: 0;
                          stroke-opacity: 1;
                          color-rendering: auto;
                          image-rendering: auto;
                          shape-rendering: auto;
                          text-rendering: auto;
                          enable-background: accumulate;
                        "
                      />
                      <path
                        d="m -1278.7566,426.05424 c 1.2083,0 2.5153,0.63196 3.5039,1.29102 0.7219,0.48131 0.9585,0.73598 1.1992,0.95898 -0.2407,0.223 -0.4773,0.47767 -1.1992,0.95898 -0.9886,0.65906 -2.2956,1.29102 -3.5039,1.29102 -1.2084,0 -2.5154,-0.63196 -3.5039,-1.29102 -0.722,-0.48131 -0.9586,-0.73598 -1.1993,-0.95898 0.2407,-0.223 0.4773,-0.47767 1.1993,-0.95898 0.9885,-0.65906 2.2955,-1.29102 3.5039,-1.29102 z"
                        id="path50536"
                        style="
                          color: #000000;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: normal;
                          font-stretch: normal;
                          font-size: medium;
                          line-height: normal;
                          font-family: sans-serif;
                          font-variant-ligatures: normal;
                          font-variant-position: normal;
                          font-variant-caps: normal;
                          font-variant-numeric: normal;
                          font-variant-alternates: normal;
                          font-feature-settings: normal;
                          text-indent: 0;
                          text-align: start;
                          text-decoration: none;
                          text-decoration-line: none;
                          text-decoration-style: solid;
                          text-decoration-color: #000000;
                          letter-spacing: normal;
                          word-spacing: normal;
                          text-transform: none;
                          writing-mode: lr-tb;
                          direction: ltr;
                          text-orientation: mixed;
                          dominant-baseline: auto;
                          baseline-shift: baseline;
                          text-anchor: start;
                          white-space: normal;
                          shape-padding: 0;
                          clip-rule: nonzero;
                          display: inline;
                          overflow: visible;
                          visibility: visible;
                          opacity: 1;
                          isolation: auto;
                          mix-blend-mode: normal;
                          color-interpolation: sRGB;
                          color-interpolation-filters: linearRGB;
                          solid-color: #000000;
                          solid-opacity: 1;
                          vector-effect: none;
                          fill: #ffffff;
                          fill-opacity: 1;
                          fill-rule: nonzero;
                          stroke: none;
                          stroke-width: 0.99999994;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-dashoffset: 0;
                          stroke-opacity: 1;
                          color-rendering: auto;
                          image-rendering: auto;
                          shape-rendering: auto;
                          text-rendering: auto;
                          enable-background: accumulate;
                        "
                      />
                      <path
                        d="m -1270.6523,435.70117 -0.7071,0.70703 3.25,3.25 0.7071,-0.70703 z"
                        id="path50538"
                        style="
                          color: #000000;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: normal;
                          font-stretch: normal;
                          font-size: medium;
                          line-height: normal;
                          font-family: sans-serif;
                          font-variant-ligatures: normal;
                          font-variant-position: normal;
                          font-variant-caps: normal;
                          font-variant-numeric: normal;
                          font-variant-alternates: normal;
                          font-feature-settings: normal;
                          text-indent: 0;
                          text-align: start;
                          text-decoration: none;
                          text-decoration-line: none;
                          text-decoration-style: solid;
                          text-decoration-color: #000000;
                          letter-spacing: normal;
                          word-spacing: normal;
                          text-transform: none;
                          writing-mode: lr-tb;
                          direction: ltr;
                          text-orientation: mixed;
                          dominant-baseline: auto;
                          baseline-shift: baseline;
                          text-anchor: start;
                          white-space: normal;
                          shape-padding: 0;
                          clip-rule: nonzero;
                          display: inline;
                          overflow: visible;
                          visibility: visible;
                          opacity: 1;
                          isolation: auto;
                          mix-blend-mode: normal;
                          color-interpolation: sRGB;
                          color-interpolation-filters: linearRGB;
                          solid-color: #000000;
                          solid-opacity: 1;
                          vector-effect: none;
                          fill: #586597;
                          fill-opacity: 1;
                          fill-rule: evenodd;
                          stroke: none;
                          stroke-width: 1px;
                          stroke-linecap: butt;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-dashoffset: 0;
                          stroke-opacity: 1;
                          color-rendering: auto;
                          image-rendering: auto;
                          shape-rendering: auto;
                          text-rendering: auto;
                          enable-background: accumulate;
                        "
                      />
                      <path
                        d="m -1266.5508,437.30469 a 0.50004997,0.50004997 0 0 0 -0.3476,0.14648 l -2.711,2.71289 a 0.50004997,0.50004997 0 0 0 0,0.70703 l 6.2871,6.28711 a 0.50004997,0.50004997 0 0 0 0.7071,0 l 2.7129,-2.71289 a 0.50004997,0.50004997 0 0 0 0,-0.70703 l -6.2891,-6.28711 a 0.50004997,0.50004997 0 0 0 -0.3594,-0.14648 z"
                        id="path50540"
                        style="
                          color: #000000;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: normal;
                          font-stretch: normal;
                          font-size: medium;
                          line-height: normal;
                          font-family: sans-serif;
                          font-variant-ligatures: normal;
                          font-variant-position: normal;
                          font-variant-caps: normal;
                          font-variant-numeric: normal;
                          font-variant-alternates: normal;
                          font-feature-settings: normal;
                          text-indent: 0;
                          text-align: start;
                          text-decoration: none;
                          text-decoration-line: none;
                          text-decoration-style: solid;
                          text-decoration-color: #000000;
                          letter-spacing: normal;
                          word-spacing: normal;
                          text-transform: none;
                          writing-mode: lr-tb;
                          direction: ltr;
                          text-orientation: mixed;
                          dominant-baseline: auto;
                          baseline-shift: baseline;
                          text-anchor: start;
                          white-space: normal;
                          shape-padding: 0;
                          clip-rule: nonzero;
                          display: inline;
                          overflow: visible;
                          visibility: visible;
                          opacity: 1;
                          isolation: auto;
                          mix-blend-mode: normal;
                          color-interpolation: sRGB;
                          color-interpolation-filters: linearRGB;
                          solid-color: #000000;
                          solid-opacity: 1;
                          vector-effect: none;
                          fill: #586597;
                          fill-opacity: 1;
                          fill-rule: nonzero;
                          stroke: none;
                          stroke-width: 0.99999994;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-dashoffset: 0;
                          stroke-opacity: 1;
                          color-rendering: auto;
                          image-rendering: auto;
                          shape-rendering: auto;
                          text-rendering: auto;
                          enable-background: accumulate;
                        "
                      />
                      <path
                        d="m -1266.5408,438.51172 5.582,5.58008 -2.0059,2.00586 -5.58,-5.58008 z"
                        id="path50542"
                        style="
                          color: #000000;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: normal;
                          font-stretch: normal;
                          font-size: medium;
                          line-height: normal;
                          font-family: sans-serif;
                          font-variant-ligatures: normal;
                          font-variant-position: normal;
                          font-variant-caps: normal;
                          font-variant-numeric: normal;
                          font-variant-alternates: normal;
                          font-feature-settings: normal;
                          text-indent: 0;
                          text-align: start;
                          text-decoration: none;
                          text-decoration-line: none;
                          text-decoration-style: solid;
                          text-decoration-color: #000000;
                          letter-spacing: normal;
                          word-spacing: normal;
                          text-transform: none;
                          writing-mode: lr-tb;
                          direction: ltr;
                          text-orientation: mixed;
                          dominant-baseline: auto;
                          baseline-shift: baseline;
                          text-anchor: start;
                          white-space: normal;
                          shape-padding: 0;
                          clip-rule: nonzero;
                          display: inline;
                          overflow: visible;
                          visibility: visible;
                          opacity: 1;
                          isolation: auto;
                          mix-blend-mode: normal;
                          color-interpolation: sRGB;
                          color-interpolation-filters: linearRGB;
                          solid-color: #000000;
                          solid-opacity: 1;
                          vector-effect: none;
                          fill: #f6c490;
                          fill-opacity: 1;
                          fill-rule: nonzero;
                          stroke: none;
                          stroke-width: 0.99999994;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-dashoffset: 0;
                          stroke-opacity: 1;
                          color-rendering: auto;
                          image-rendering: auto;
                          shape-rendering: auto;
                          text-rendering: auto;
                          enable-background: accumulate;
                        "
                      />
                      <circle
                        cx="-1278.9348"
                        cy="428.28735"
                        id="circle50544"
                        r="0.90375775"
                        style="
                          opacity: 1;
                          fill: #eef396;
                          fill-opacity: 1;
                          stroke: none;
                          stroke-opacity: 1;
                        "
                      />
                      <path
                        d="m -1278.9383,426.81791 c -0.3614,0.0444 -0.7079,0.21782 -0.959,0.51172 -0.5021,0.58792 -0.4714,1.47381 0.07,2.02539 0.5414,0.55192 1.4263,0.59858 2.0234,0.10742 a 0.50005,0.50005 0 1 0 -0.6348,-0.77148 c -0.2036,0.1675 -0.4891,0.15112 -0.6738,-0.0371 -0.1847,-0.18811 -0.1946,-0.47332 -0.023,-0.67383 0.1713,-0.20046 0.4572,-0.23707 0.6719,-0.084 a 0.50005,0.50005 0 1 0 0.5801,-0.8125 c -0.3148,-0.22444 -0.6914,-0.30999 -1.0528,-0.26563 z"
                        id="path50546"
                        style="
                          color: #000000;
                          font-style: normal;
                          font-variant: normal;
                          font-weight: normal;
                          font-stretch: normal;
                          font-size: medium;
                          line-height: normal;
                          font-family: sans-serif;
                          font-variant-ligatures: normal;
                          font-variant-position: normal;
                          font-variant-caps: normal;
                          font-variant-numeric: normal;
                          font-variant-alternates: normal;
                          font-feature-settings: normal;
                          text-indent: 0;
                          text-align: start;
                          text-decoration: none;
                          text-decoration-line: none;
                          text-decoration-style: solid;
                          text-decoration-color: #000000;
                          letter-spacing: normal;
                          word-spacing: normal;
                          text-transform: none;
                          writing-mode: lr-tb;
                          direction: ltr;
                          text-orientation: mixed;
                          dominant-baseline: auto;
                          baseline-shift: baseline;
                          text-anchor: start;
                          white-space: normal;
                          shape-padding: 0;
                          clip-rule: nonzero;
                          display: inline;
                          overflow: visible;
                          visibility: visible;
                          opacity: 1;
                          isolation: auto;
                          mix-blend-mode: normal;
                          color-interpolation: sRGB;
                          color-interpolation-filters: linearRGB;
                          solid-color: #000000;
                          solid-opacity: 1;
                          vector-effect: none;
                          fill: #586597;
                          fill-opacity: 1;
                          fill-rule: nonzero;
                          stroke: none;
                          stroke-width: 1;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 4;
                          stroke-dasharray: none;
                          stroke-dashoffset: 0;
                          stroke-opacity: 1;
                          color-rendering: auto;
                          image-rendering: auto;
                          shape-rendering: auto;
                          text-rendering: auto;
                          enable-background: accumulate;
                        "
                      />
                    </g>
                    <path
                      d="m -1272.4219,422.20594 a 0.5,0.5 0 0 1 -0.5,0.5 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.5,-0.5 0.5,0.5 0 0 1 0.5,0.5 z"
                      id="path50550"
                      style="
                        opacity: 1;
                        fill: #586597;
                        fill-opacity: 1;
                        stroke: none;
                        stroke-width: 1;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 4;
                        stroke-dasharray: none;
                        stroke-opacity: 1;
                      "
                    />
                  </g>
                </g>
              </svg>
            </div>
            <p class="subtitle">
              You can either like or text someone to make your profile visible
              only to them.
            </p>
          </div>
          <!-- 3 -->
          <div class="info">
            <p class="title">Turn the attention on and off</p>
            <div class="image image-2">
              <svg
                viewBox="0 0 64 64"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="katman 2" id="katman_2">
                  <g id="icons">
                    <polygon class="cls-1" points="24 12 20 32 20 8 24 12" />
                    <rect class="cls-2" height="24" width="24" x="20" y="32" />
                    <polygon
                      class="cls-1"
                      points="48 12 24 12 20 8 44 8 48 12"
                    />
                    <polygon
                      class="cls-3"
                      points="48 12 44 32 20 32 24 12 48 12"
                    />
                    <line class="cls-2" x1="35" x2="34" y1="20" y2="25" />
                    <circle class="cls-2" cx="32" cy="44" r="3" />
                    <line class="cls-2" x1="47" x2="47" y1="35" y2="45" />
                    <line class="cls-2" x1="17" x2="17" y1="43" y2="49" />
                    <line class="cls-2" x1="50" x2="48" y1="18" y2="28" />
                    <rect class="cls-4" height="64" width="64" />
                  </g>
                </g>
              </svg>
            </div>
            <p class="subtitle">
              You can change the discretion mode from on or off in the profile
              settings.
            </p>
          </div>
          <!-- 4 -->
          <div class="info">
            <p class="title">Keep Track of your visibility</p>
            <div class="image image-4">
              <svg
                height="100"
                id="icon"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="23" cy="23.9999" r="2" />
                <path
                  d="M30.7769,23.4785A8.64,8.64,0,0,0,23,18a8.64,8.64,0,0,0-7.7769,5.4785L15,24l.2231.5215A8.64,8.64,0,0,0,23,30a8.64,8.64,0,0,0,7.7769-5.4785L31,24ZM23,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,23,28Z"
                  transform="translate(0 -0.0001)"
                />
                <path
                  d="M12.3989,20.8A6,6,0,1,1,22,16H20a4,4,0,1,0-6.4,3.2Z"
                  transform="translate(0 -0.0001)"
                />
                <path
                  d="M29.3047,11.0439,26.9441,6.9561a1.9977,1.9977,0,0,0-2.3728-.8946l-2.4341.8233a11.0419,11.0419,0,0,0-1.312-.7583l-.5037-2.5186A2,2,0,0,0,18.36,2H13.64a2,2,0,0,0-1.9611,1.6079l-.5037,2.5186A10.9666,10.9666,0,0,0,9.8481,6.88L7.4287,6.0615a1.9977,1.9977,0,0,0-2.3728.8946L2.6953,11.0439a2.0006,2.0006,0,0,0,.4119,2.5025l1.9309,1.6968C5.021,15.4946,5,15.7446,5,16c0,.2578.01.5127.0278.7656l-1.9206,1.688a2.0006,2.0006,0,0,0-.4119,2.5025l2.3606,4.0878a1.9977,1.9977,0,0,0,2.3728.8946l2.4341-.8233a10.9736,10.9736,0,0,0,1.312.7583l.5037,2.5186A2,2,0,0,0,13.64,30H15V28H13.64l-.71-3.5508a9.0953,9.0953,0,0,1-2.6948-1.5713l-3.4468,1.166-2.36-4.0878L7.1528,17.561a8.9263,8.9263,0,0,1-.007-3.1279L4.4275,12.0439,6.7886,7.9561l3.4267,1.1591a9.0305,9.0305,0,0,1,2.7141-1.5644L13.64,4H18.36l.71,3.5508a9.0978,9.0978,0,0,1,2.6948,1.5713l3.4468-1.166,2.36,4.0878-2.7978,2.4522L26.0923,16l2.8-2.4536A2.0006,2.0006,0,0,0,29.3047,11.0439Z"
                  transform="translate(0 -0.0001)"
                />
                <rect
                  class="cls-1"
                  data-name="&lt;Transparent Rectangle&gt;"
                  height="32"
                  id="_Transparent_Rectangle_"
                  width="32"
                />
              </svg>
            </div>
            <p class="subtitle">You can see who can view your profile.</p>
          </div>
        </div>
        <div class="btn-container">
          <b-button class="custom-btn-1" @click="closeModal('discretionModal')">
            OK, GOT IT!
          </b-button>
        </div>
      </b-modal>

      <b-modal
        id="profileHiddenModal"
        content-class="rounded-lg"
        body-class="rounded-lg"
        centered
        hide-footer
        hide-header
      >
        <h2 class="text-center">Profile Hidden</h2>

        <p class="mt-4">
          Do you want to unhide your profile and send your like ? after all ,
          you want them to know you're interested!
        </p>

        <div class="btn-container-2">
          <b-button
            block
            class="custom-btn-1 mt-4"
            @click="$router.push('/dashboard/powerups')"
            >OK</b-button
          >
          <b-button
            block
            variant="empty"
            @click="closeModal('profileHiddenModal')"
            >Not Now</b-button
          >
        </div>
      </b-modal>
    </b-card>
  </div>
</template>

<script>
import { VueAutosuggest } from "vue-autosuggest";

export default {
  props: ["user"],
  components: {
    "vue-autosuggest": VueAutosuggest,
  },
  data() {
    return {
      selected: "first",
      options: [
        { text: "Anyone Can See You", value: "visible" },
        { text: "No One Can See You", value: "hidden" },
        { text: "Choose Who Sees You", value: "choose" },
      ],
      suggestions: [
        {
          data: [
            {
              id: 1,
              name: "Marble Cake",
            },
            {
              id: 2,
              name: "Fruitcake",
            },
            {
              id: 3,
              name: "Chocolate Cake",
            },
            {
              id: 4,
              name: "Fat Rascal",
            },
            {
              id: 5,
              name: "Financier",
            },
            {
              id: 6,
              name: "Genoise",
            },
            {
              id: 7,
              name: "Gingerbread",
            },
            {
              id: 8,
              name: "Goose Breast",
            },
            {
              id: 9,
              name: "Parkin",
            },
            {
              id: 10,
              name: "Petit Gâteau",
            },
            {
              id: 11,
              name: "Salzburger Nockerl",
            },
            {
              id: 12,
              name: "Soufflé",
            },
            {
              id: 13,
              name: "Streuselkuchen",
            },
            {
              id: 14,
              name: "Tea Loaf",
            },
            {
              id: 15,
              name: "Napoleonshat",
            },
            {
              id: 16,
              name: "Merveilleux",
            },
            {
              id: 17,
              name: "Magdalena",
            },
            {
              id: 18,
              name: "Cremeschnitte",
            },
            {
              id: 19,
              name: "Cheesecake",
            },
            {
              id: 20,
              name: "Bebinca",
            },
          ],
        },
      ],
      filteredOptions: [],
      selectedProfileName: {},
      locked: true,
    };
  },
  methods: {
    onAutoSuggestInputChange(text, oldText) {
      if (text === null) {
        /* Maybe the text is null but you wanna do
         *  something else, but don't filter by null.
         */
        return;
      }

      const filteredData = this.suggestions[0].data.filter((option) => {
        return option.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });

      // Store data in one property, and filtered in another
      this.filteredOptions = [
        {
          data: filteredData,
        },
      ];
    },
    onAutosuggestSelected(item) {
      this.selectedProfileName = item;
    },
    renderSuggestion(suggestion) {
      const character = suggestion.item;
      return character.name; /* renderSuggestion will override the default suggestion template slot. */
    },
    getSuggestionValue(suggestion) {
      return suggestion.item.name;
    },
    openModal(id) {
      this.$bvModal.show(id);
    },
    closeModal(id) {
      this.$bvModal.hide(id);
    },
  },
  watch: {
    selected(newval) {
      if (newval === "choose") {
        if (this.locked) {
          this.openModal("discretionModal");
        }
      }

      if (newval === "private") {
        this.openModal("profileHiddenModal");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.image-4 {
  .cls-1 {
    fill: none;
  }
}

.image-2 {
  .cls-1 {
    fill: #ecf0f1;
  }
  .cls-1,
  .cls-2,
  .cls-3 {
    stroke: #434a54;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
  }
  .cls-2,
  .cls-4 {
    fill: none;
  }
  .cls-3 {
    fill: #f1c40f;
  }
}

.image-1 {
  .cls-1 {
    fill: #e7e7e7;
  }
  .cls-2 {
    fill: #ced0d0;
  }
  .cls-3 {
    fill: #426572;
  }
  .cls-4,
  .cls-8 {
    fill: #fff;
  }
  .cls-5 {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
  .cls-6 {
    fill: #a9ea9c;
  }
  .cls-7 {
    fill: #91cd86;
  }
  .cls-8 {
    font-size: 155.97px;
    font-family: Dosis-ExtraBold, Dosis;
    font-weight: 700;
  }
}

#discretionModal {
  .header {
    background-color: #a07134;
    color: #fff;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.2rem;
    border-radius: 10px;
  }
  .body {
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .info {
      width: 250px;
      border-right: 1px solid rgb(172, 168, 168);
      padding: 0.5rem;

      &:last-child {
        border-right: none;
      }

      .title {
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
      }
      .image {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .subtitle {
        text-align: center;
      }
    }
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .custom-btn-1 {
      background-color: #93652b !important;
      outline: none;
      border: none;
      border-radius: 10px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.7rem 1.3rem;
      transition: all ease 0.5s;
      font-size: 14px;
    }

    .custom-btn-1:hover {
      background-color: #ac854e !important;
      transform: scale(110%);
    }
  }
}

.private-mode-card {
}

.custom-link {
  color: #a07134;
  font-size: 0.8rem;
  font-weight: 600;
}

.custom-field {
  border-radius: 25px !important;
  height: 45px !important;
  border-color: #93652b !important;
  padding: 20px !important;
}

.custom-btn-1 {
  background-color: #93652b !important;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.3rem;
  transition: all ease 0.5s;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(105%);
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-container-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sections-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 33.33%);

  .section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
