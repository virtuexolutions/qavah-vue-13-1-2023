<template>
  <div class="pricing-plus-page">
    <!-- Navbar -->
    <homepageHeader />

    <b-container class="main-section">
      <div class="top-heading-container pt-4">
        <div class="top-heading">
          <h1 class="text-center">Show Affection with Qavah Plus</h1>

          <p class="text-center mt-2">
            Qavah knows choosing the right mate can be challenging. Qavah Plus
            provides you with some premium features to aid your search for your
            perfect match. Gain unlimited “Fancies” to send to as many possible
            matches and find the best-suited one. From the pool of unlimited
            admirers, catch the attention of the one you like most.
          </p>
        </div>
      </div>

      <div class="feature-card-container">
        <b-card class="feature-card" no-body>
          <div class="icon">
            <b-img
              src="data:image.webp;base64,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"
            ></b-img>
          </div>
          <div class="content">
            <h2 class="title">Fancy</h2>
            <p class="subtitle">
              Capture their attention with unlimited Fancys’ to let them know
              you are interested.
            </p>
          </div>
        </b-card>

        <b-card class="feature-card" no-body>
          <div class="icon">
            <b-img
              src="data:image.webp;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAACu1BMVEUAAAD///8AAACAgIAAAABVVVUAAABAQEAAAAAzMzMAAAAqKioAAAAkJCQAAAAgICAAAAAcHBwAAAAaGhoAAABGRkYAAABVVVUqKioAAAA7OzsnJycAAACAgIBJSUkAAABmZmYzMzMRESIAAACAgIAQEBAAAABaWlpLS0tjY2M5OUccKzlra2sAAABhbXmLi5cVFSqdnadoaHGIiJCyubmZoKiqqrG8vMLBwca+w8PCxsvGys/N0dHNzdHQ1NfR1NfX2t3c3+Le3uHf4uXh4ebi4ufj5efg4+fi5Ojp6+3h4+fn6ern6+3n6e3o6Ozo6e3o7O/s7e/q7O/p7Ozs7vDt7/Lt7fDu7vHu8PHw8PLv8fPw8vPw8vPx8fXx8/Xx8vTv8fTz8/Xx9PXy9PXz9fX19fbz9vf19vfz9Pb09ff19vj29/j29/n29/n3+Pn3+Pn////4+Pr//////////v73+Pr+/v7////+///+/v79/v79/f74+frZ3/XL2vXA0PK8zfGxxvCmv+6XtOuVs+t3oOdQi+NIhuIrbt0Nc98Ead0Aad0AadwAaN0AaNwAZdwAY90AYNsAW9sAWdsAV9sAVdsAUtoAUNr///////7+///+/v79/v78/v/+/f77/v/8/f37/Pz4/P76+/z6+vv4+fr1+f7x9/3v9Pzs8/zq8fvm7vri6/rf6fna5fjV4ffR3/bN3fXG1/TD1PPC0PK9zfG3zPGxx/Csw++mvu6iuOyduO2esuqQseuVremMrOqGqOmBpehym+Zsl+ZmleVhkeRejuNbj+NeieJUjeRdheE8f+Eldt8bd+Akbd0hbd0dbd0ba90Za90Wa90Ta90Pa90Qad0Ab98Lad0HaN0Fad0GaNwBad0Aad0AadwAaN0AaNwAZd0AYtwAXtwAXdwAW9sAV9sAU9oAUdogkajjAAAAmHRSTlMAAQECAgMDBAQFBQYGBwcICAkJCgoLCwwMDA0NDQ4ODg8PDw8QEBARERISEhMTFRYYGhseISMnKi0zNjo9QkdNU1ddYWZqbHV6fn+Ii4ySmJ2foaSlq66xtbe7vcDDxcnJzM7S1tvd3+Tm6ert8vb3+vr7/Pz8/f7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/s7wT3UAABcZSURBVHja7Zz5f1vVmca1XF3tsizfKFYiW07sOHYqUkJIKIQlUJZQWpZQQsI2EAhrySIZ3ShmOu1Ml5nIcckG15ZHKLEDLTRAaUuZMh1SthlK8ZoAA5HjEJLwZ/R533Ov3SLrylvS/pBjWZ8rObG+ed/nXc6558Rybpwb54bZsFn+nsOGB76s+isrBp4teAMXZ3cAgzkMg1iJR0fjZyu9PHsDJsATGAjCxgMAo4N+oHPbzgIMW4MvbHYBYLfaJMmuX9GQ7Pgh/bmzQWNcCBYJw2638zMedGWXBCWIbLqVzrSiBAsA8OkOSXY4JIfDLsl2WcaFg5DwEziRHoaLbWfIV4Ah5ZA9HHbQAMIhy7LTIbsAJvM3v8NMbKwzFlbsAbIMvujjHPTh4HA5weJyOZ34duDLhbcYSsKwiXGG7GMFjV24SgILMwDHMzrcHo8LL/EDp+wCEusLQuPAOwNM8BNbhmjIHm4nIXh8Pi8eXh9djHE5YSVSF5isM20kDnIRU3bSMB4uWMLt9uLhC/h89B3wegNev98PMA8eYKIhg0hycAjMVLCJ4OXcQlHNunF7MLwM4g8EAkExAhXBigC9Bh4GMwmtS+RpEXKIiGmr2ZCynVTMugEQ0eDTAYFRGawMYVTqYDzgR68bVnSRwkl1+BVMNF0pi9ACDguZPIUvOAojSDQhBSQhRVFCVWCi72BFCFSghbC8bic5TuhbgpWm3xOI1ENiplh2ChEzSwgwNKpmzZqtj1nV1eBTlErCqggEYCU4zs2JwE5+s1JPMD0rQc2cB/E7KcLxr2bbkI+UqupZs2tqamaHQ+wnANJLYIESP2c76WKCliRGIotP1UZGarZTEgSP2w3r+P3AYRqCCfvwq0NNX19yIcaSrzcF8dd8CkGFGYmYoCWRBhCjVE+m5zUR7ZAz0g4FFnCCkEpV1eya2T6LtOCildffsu6+hx7buGXTxkcfXL/2luuvXN4kWXz4cbhKgbrIcV4PZ0sQkYxErzDFbpRxoGWHiwIdeSbIwqmuqfFZQt+4dvUDm3ry2U5tdGSz+Z6ND6y+5qKgxVdTMwueg5X8lDk9TjaSbNc7pqnrx2GHeVysZdDAOkp1w2yLfNGqezZ2ZzVNTWxOtqRSaYxUqiWZSKjA6t5496pvSJZZNfAcISHkSEowEtc3vZ+afPqxQj7wF9TsJjGDh3GqLcrKNY/ns1oyQSDZdBYPsg6/AFgiqXXue3zNyqilmqzEUoKN3C4nK4mIqKGaHI/oTsED87jB4wsQTjhcM9sS++Y9PVktkaSPVwEgMIyh8ctkQsv2rP9mzDK7JsxIARQVPXXbqdecnLBFTkX2YXdRxWLxVClzGlyBq+7vgaMMmiIgulbpGc4DUlBugLxZ3D6uulRKqHcjn02ynJK7nCQfb4BCXQmHG8KWS+/s0ZIt6awKN9EQLiu+JqaWpNZzx6WWcAOMVBnkcAMRgMSsYJIllfOhLJOcwVMJd1U3SIu+vSWrEk6xVYqvVULKPvmdermhOqwgd0NIiDZ0C6RshpqEz5hHhBfLRwnPrrFcun6flgBOkVVKXAMpoeXvv9RSB7eFKJ9D2ixsQqJKOeFejJsf6kxhH38wVFkVrgvL1z7RuZlwiiFKXgNpc+eW6zxKHRP5yUZUbB1ko4nnR5EPuQ1jOcNfDYHGW7q1RLZYyObXQEpoPTc3BhvCYSIiG7kAhOhnJtsE9Kw3hzJaYwiawgvR7llydz6ZIm9hGGaYyDWIUon83UtcDeGqKsNrAgg4E+yBqPmhgGf9VFbBPtKF93dtTmvgmSwQiLT05tz6C2UQKSDy+qiyQdjShAxko28icqLbEOkQ4S5f/HBnIqulTXRjdq1lE50PX8xEImm7QCRmbeWY8GMxKXVQpxogAUHPngsf7txM7poiENy2ufPhCz11wkZ+L0ykz9vKu0y0q9RuGPFeF1yyPss8UwViaXfevyRQF1aojFDt5+mt1T6hEAMPMjQDUf4Jx+7qQniZRVP5axDl7qoP14IIVYQrP2zEjb+tXIhRgXewoKlezK1x3ZwnnmkBsdfyN8s11UTEMmIiTtc2Ex4A8fyCKxgSIgRtubYnmdbKuKb8NX5Fsudamx5qPjf12RAHgMyXxgyHeX0AIgG5VmzSUvid07UQmFLaphUuStlBbrSdMiejskUDKYjnF35y2JxIdD0CXp2oJczLSCJ7X2NkTlipBJGQEeYhbIiSLoPKBBALuirSYLlh32bwzARQFkT7rrew0yr8lIxcSEZmGhIKkmUuqRXsMM8lW7T0pOtX6cZN23QJshEnIx94yGlmq5HcRDtk6ln9xFNdF1gLO5vUr0nWNfyytZ46RBrmIlRBZNI1NY8lmzJhIe7JqhRE2JWIsHIFVR290soW2rTasxKRpogq6wKRxG2ISRIiHlYQFF0bvrezJZsuo49tuazKk7LWVsCZ6QnfLdo/hWt1XSNhGz4rCcRdogsT5lBo1EBmgtXSrUSztTOL+aKqdrRmNVOBq0hGV9rqIopojSAjCUgmkhazQq9QUK1yDwxk9gFaF5qLX/7mD+/835/+9O6hH7zUqXbkVDMgmKjzziBUJALNwy2/NG6g2fCQMBzME1TCkTr58gNweumoUdVWVX3ljx8/c2rXTozdzzz19ve3aq1mUUkqOnC5zCYKCiDK1uPJ2sYzQ/IYhVglgBps3+1KZEuHsZpuVV84tGtPe+/gYRqDvYO79r51EDhqaSAEWtdqqSFCKuI2hKcgpV3Ga1JIQgCqDS1/TEuVnn+pnTntlQ/39g1+UhjODA+P4Hn7UO/J4z/Q4MrSQaCmtMeWhWp1WZOIZHuJOLNJBERlntpEJOlr9iVMEh389f2ndvZl2jOZ4bZMpn3Hjgyu+z/b+0OykUmSTOy7xkJzx1AAKhKBT3op9pgIeicloRBJyLMum8yWDGOtVXvl+PGh9kwhA9sUCiPHjmUyxzIjRwZOv6blOk3SRDJ7h68uEq4KiqJP3bV1/DRtpZUpNyWhYBU8tgweK1mbtC71Fx9+PjSSyYyApr1wtDBS4OuRI0NfvKzl1NLdY0r73nL4DEUfFnJzth43yGwS11WRpcljV3Wbdonqm3v64C64qb0w1NvXO7idXmUK7YO73t9v5rJ0svsqC2RNQF6PkyaNGOOmRU7TBpB0Y1eidLnIaS+dGCwUCsPDhfZPB09+ufvLU58cgZEKcF7vl7+F00r+XTSzN0oNc8Mhah0BJJfo0qwSzcY8biobVZG5teH7tJZ06dqkvbm3f6QwMlwY2f7Zybd/++pvDh3//PBIBoCFwyfee1YzKbQoH0ptNflMADmKfMYa52ba6faKOlarLKWgL62hn394/FMoua396Eefv8a17OX/eOqj9mPDbYXC0ImX1G0lRa1CRMuU2ggBBTwcZ9ZiIJuehchlIk1f8aRWOlJatV/tGoJ3EFn9e36npfO5PLLSjs+2H6OI6zv9utqqlfzHpLUnLnfVkYiCEJERZrZiCYnlFy8DobfPJ8yAXt/bz6E+dOK9fMc2raMjm1MPnRo8NpI5Vug//T9mSzbIRNdC1Vj0D3gpE0mkonFdRkA+LmTRBst3cpuzJSOlVf3vZ/oybRkYaO+P1BwFFRLlvzzdlxnBm4d3vbPfJEKzm3PfBpAe+C6XSI3Wr0a9HUA0n6flhfDcOt+t2UTaHIjDfGDPG2qX/t4/A3IY7x3Z+ZPnzFJGIvvdQN1cnqFxgUWJKGqtaYlTkoSFQmHqze7qTJq5DECFEWho4NQhjVsOPP/wdD9EPVI4cuL951SThj/ZeWekdk7EmKBB1eD5GxMRH3ioWfQHABSZE6tfr7WYWej3cA/Vr09+9ucXtFZ+a//7Ow9TXWsf3P3jZ80slNLub4zOCTMQVM0u+9uFa+vYfCPgJ6Da6Nce1FJmFnpt9wCLun1g9x+fVTuyHZr2xu4BUdf6vvy92mpioZT20KIoigducgkg+KzorhWmbLSIJ/IigBY/aga0TTu487AI+5H+U28dfFZ79oU/7BpEUUMeOtp/6jWEvRnQo4sjc2jVkRtrnp0VaYjTEEprIMAWiiz+npYyMbv63E93ftLWjpajrX3g5FPvvPlWZs9gph18EPVnmRfNFicoMxIQ4p7nHg590eErGuJJPQFVjAKZTGty2hun+wqFYygVmZGhj06ePvn/g1TwqbgdPvm2aenQdCDRgbg8qPfjzIVowkF5yM+lVbgsa1ZcX0ZxRS0bppbj6OH+oaMjeLkDPJDQa1q+ZHEdc5nC1Yw1ZP0qjZi1QkNiSlZO1NygvfsFVNTWNtJGoT6MFCCuM58e//MvTJdvALTha1FYSI97vd7bimb1kuhf0eFH5sYaEfYmv7Qzp/76VN8xbsoAwUB8XWjvO/2GljMFatHuq5/LFsINEACRhsbv8BFlLGp0H5E7zBJjuiOr7n/vxOECta1Uv4wWtlDY/smxX6KfTJsmxjvCtcjUlSzqUkASd/i6y+bWBcxKB4bWqv56by+iDIPqFx7ium/vG2orgsy0dNzi49LBxczpAI+9uNhzpmYNVYYjUSwMmRRXvlb3v7NriOsZ6pcx2pG5f844psX1BktDVJQO7EuQHQACRHEDK7k8nKkZ6Op9Zi7TA21AaKjN0BAZ6HdazmReRmTJfVcDyFj+pCXroqmZjcLergMpiPuFvsu2aGUXoH70NEr+jrF5GcoYclCZBS4VDdplvoVR3GjkHrbEgoONiPS1vErKjEuRiLaaLdFpWe35D3aijx6bl41sH/r8JTKQqYWQhi6IztOBeFG/ODHqdziEqCkzzm1S7upsSZsBZfHJv/pi4Ggb6tewcBkmHK+r4DEHaum8O1I7NwKXBfw6UPFig5V7fG5hK6iFjcVlUnW59UP1357ubYd02tra2+Gw/t3sMHOXYRp0gwwJYWGPgWS4DLW+OMzsTOTlJh+qllb2qGnVdIkOTtv/vycHsM5AFsKk9fjHL8Js5uuNGi3rSXXRCHewDGSXBE5RmDkcTifuKNAdzci8yNJHUDxMgchpBz/+2REiAs/RvlOvEo85ECT0yFJIiKeufg8BjZcX9ZZRHl2uii30rcGiaZk1aKTHV3cPHEUbRDPWp/9LLb9mjV96m2dhDBICkBdAQtPFRPptcbe++BGNS1d1J9Nl7pF1IGX/6+neHQXw9O358X+qWa0MEK0yXiXVxcS0TNzvHHexAURsIRd8RgtoMOoFD2mp8hsGOtRDX/bCYf27f/Ic1mjKWgj9q+GxgJc9VuImFfIQu4x8Vini7Mac2ZKeGOo29bl3dvfu6N/5wYuoYeZRKWLsJikeM7IQNx/UfZS8rwAgH/ksHF0YWMH3FcqEMSie/+nT/77r44PEYw4k0vSKwMKosWDlFA1sqZutssO4UwafxeKe27KJ8iJFJnzx3c8/eAUCL3sjhm8uBBfCQIoCj2HKoU8TS28fMBY9Oc54Xbj87cucuv/g8+q2reVvg/KqsA9AxrQVabr0Yj4D8a0gkRvnNwfWGSZKm7ezmoYEVHZPCBtoXbB5fpTrBlVWNEPjzOzHdpE7WNZibhaJNQcue4JUVA4oq2ZztBRcDmjMQLxa5UcdoyxUyj6W0R1V3oCoZ/Vx12oE2szdL0OI3exBiP3VygeA7ARk4jO+vxmCiaKxpvByNCFaembul/GEbHkYWRpJqIINxFMyyoGlNn3YeROKfnsKRHHpmu4kTDQTQGSg7mskNpASDBq7UiSTbTsAssu8EssqgtPmNStreRfBDN0EXhdYOI9DLCTWPWTJfD86V3yXk7O1MFGzAqe1gGjaQCqmY48uV6DoiCKyNIDsDGS+zUKfv5LTEGixuG/lAS01ExsJEGEroehYxOjuWdEIbtO9eZLwmZecBp9FEWnyt7oTaW26UaZhAf9brng9KaiSq4bY/mE12bBnAy1UxHdg3H5d15BR6NY8iKYBxDyJ/K0hCAg8YssO1vLAY7q1geQu2jR9bwxKLMV+ff1a2l41ne06tMnq9lh9E3jEXjSqYk6xCd18WI1cxIGmUI2NLYyed28ORFO3EHi67j0v2hxDhJGBeH5You8oKh9wGYg8MBH1RSyj5vDSe3Pwmjo1C6nwV+7epeFmEpCiiAgTZyzMD1kZmwl4/73T4xUyCjPRebeLTXqTBuJtesn82vMEDxcxKJqSNB+1mtgmRlnWvRYKCRvB2Lfuo3w0eZdR/uleXR8b4xEpiHv7iezSs0lWrKUREcsIq1dEtHBBcNUBjd02yXKRTmgHVoUWNEE/UbEFTWyMQSs9AfsQMp0qcRgmYqcRUVOz64pHuthtEwdid2UfuUJubqoXAUY3x9lADhMDFc8YbbxJxpjpc4KMzY/7lt3eM5nNucI8PWuW+eLzwUMLQnqK5lu/cIV1omcQOfb5VgwXNaGjxngkcPWjOUYqD6Tj5B+5OhRZXM/2URSx2QtFnkN+YqdObMJIfHDL6aaFfRCRjdht8rKbDmQJaWuHOZDAyW65aRm7i3mMzbnMY7cT0IQ3eINfFDUEv9h+ytJeEI96Ll3zJJBS5bbAtwDnyTUrXNH4AjIPeKAfselc56EAmswOb72EYLteBRlJENU3xYOBy27blNdUZtpaDAQaPriQ37j6skAo3kTu0u3DbT2tB9FJoYnDMLiNTCSNbjmvGDVSY3M8FLj4hgd6usCUTKW+eowilUomVK2r54EbLvYE482N7C7DPj4fd9EkaPskjpvw3TQ4WDLm1rxFzoj/+gXNcUW+YOUtGw7kwYGzJcmWlhRGS0sSp05Alj+wYfXK811KvHmBUA/LGfbx0rQH8a63ZRM/KAgc4TW+/eEkIqzvE1EY2oaUmuKNPs/5l69at2Fjdz5nHMbpzOby3Y8/uHbV5Rd4fI3xJsbh6KpiHI538hasj9iZ7GloOM3K99CE24xoE1KqX9Qcbwx4guetuPK6G2+7874NDz64Yf1dt9143ZWXnB/0+OrjzYvqDWfRkTiuXzzr4ZZDIppJHn0BFSvbQUQAgtsqsLQm/BYjpnnNi5vnKS45oGAGhxGLKAFZDi9YvLh5UaOBA57K0Kh9ZKdsB5HVhKX84QXOkFxGAiCCkQgpEhNQ85vj8Xhz0yIeTc141TSvkeCAQzxVFFzg4WNvIt4lwpnqaUWbnY9TAIkPSvqFuBUOOMqUPBaMjvnziYVh2DpV+tkpg8dhl/nw5NROc3JQQkicIXUh+fUDb0BiNREVD3AwCcMwDTmLcdhbbpeYxot7mVMdTCSqCJ0nddMZPJ4fQUuhKmbSqZiMn/mtMEaIreP3UzHl6BKHOTCmeY7TZiDJfCzaDSJmwlDCpKgIczGHQKEwV4SzaHrqYfPwYVdIcvrnbrny4yH85vQIK0FM6N3AhM+GpoxRRa/wNmAq/MCh0OI1F+5XTRqgyYY/G0nScxKYAjoSoCrxUKAqGkDEV8XYaWAvWYc6dLs4eDtTB6YhRIkH5v3MBDVBHILKj7Amm8Awwk10YtoPO/LBZHFYWgKMbp+ZQLJyE8lrNbASlzcM5EqvEBQebBM/P8OjgOE4Bz79eYPGKlhmykbI+Mb5dj7BPUZFCAChay9eQWVulwd/hisFmUePrRnjseqtNumbSqP+PyN4+Cg34s6LB2GBhUyDmiWMA+s4dByTY9tTVzcsZJz0wnBQH0BmoARFZOwlwQJgDOrDyNNMw4+ZHDbxxFYCEyPhm80AJmEwJ0GyYeySiHMeljMxrGOZm61EvpORLvHFogIZUGjAgEzDXaHhK1CdoSEKI38WfSiogCWxVchHeINZrTYxzvz/AmQddR2QjP+jxYEnDAAKIJ3GRDYzC2SstmGI/ISHJC6EhgnG8NTZGcDRZYWPxyBpCUARUvjm57M7COGvTScASTBn2FnmgWclBnpYWVsYwlXnxrlxbvyjjr8AP+lhhZuYohsAAAAASUVORK5CYII="
            ></b-img>
          </div>
          <div class="content">
            <h2 class="title">Sojourn Pass</h2>
            <p class="subtitle">
              Vibe with other Israelites throughout the world using Qavah’s
              Sojourn pass!
            </p>
          </div>
        </b-card>

        <b-card class="feature-card" no-body>
          <div class="icon">
            <b-img
              src="data:image.webp;base64,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"
            ></b-img>
          </div>
          <div class="content">
            <h2 class="title">Say What?</h2>
            <p class="subtitle">Go back and retrieve your last Kan or Lo.</p>
          </div>
        </b-card>

        <b-card class="feature-card" no-body>
          <div class="icon p-4 py-5">
            <svg
              id="Layer_1"
              class=""
              style="enable-background: new 0 0 128 128"
              height="64"
              version="1.1"
              viewBox="0 0 128 128"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              >
              <path
                class="st7"
                d="M90.3,78H36.7L23,85.4V78h-9.3c-2.1,0-3.7-1.7-3.7-3.7V17.7c0-2.1,1.7-3.7,3.7-3.7h76.6c2.1,0,3.7,1.7,3.7,3.7  v56.6C94,76.3,92.3,78,90.3,78z"
              />
              <line class="st2" x1="26.8" x2="78" y1="31" y2="31" />
              <line class="st2" x1="26.8" x2="78" y1="50.3" y2="50.3" />
              <line class="st2" x1="26.8" x2="52.4" y1="60" y2="60" />
              <line class="st2" x1="26.8" x2="78" y1="40.7" y2="40.7" />
              <path
                class="st2"
                d="M90.3,78H36.7L23,85.4V78h-9.3c-2.1,0-3.7-1.7-3.7-3.7V17.7c0-2.1,1.7-3.7,3.7-3.7h76.6c2.1,0,3.7,1.7,3.7,3.7  v56.6C94,76.3,92.3,78,90.3,78z"
              />
              <path
                class="st45"
                d="M37.7,40c-4.8,0-8.7,3.9-8.7,8.7v33.5l7.7-4.2h53.6c2.1,0,3.7-1.7,3.7-3.7V40H37.7z"
              />
              <path
                class="st1"
                d="M37.7,109h53.6l13.7,7.4V109h9.3c2.1,0,3.7-1.7,3.7-3.7V48.7c0-2.1-1.7-3.7-3.7-3.7H37.7  c-2.1,0-3.7,1.7-3.7,3.7v56.6C34,107.3,35.7,109,37.7,109z"
              />
              <path
                class="st2"
                d="M37.7,109h53.6l13.7,7.4V109h9.3c2.1,0,3.7-1.7,3.7-3.7V48.7c0-2.1-1.7-3.7-3.7-3.7H37.7  c-2.1,0-3.7,1.7-3.7,3.7v56.6C34,107.3,35.7,109,37.7,109z"
              />
              <g>
                <polygon
                  class="st16"
                  points="93,45 93,78.2 102.5,97.8 112,78.2 112,45  "
                />
                <polygon
                  class="st1"
                  points="106,40 106,77.6 96.5,97.2 87,77.6 87,40  "
                />
                <rect
                  class="st18"
                  height="19"
                  transform="matrix(6.123234e-17 -1 1 6.123234e-17 37.5 155.5)"
                  width="38"
                  x="77.5"
                  y="49.5"
                />
                <rect class="st16" height="38" width="6" x="100" y="40" />
                <polygon class="st3" points="91.7,89 95.7,97.3 99.7,89  " />
                <polygon
                  class="st2"
                  points="106,40 106,77.6 96.5,97.2 87,77.6 87,40  "
                />
                <path
                  class="st13"
                  d="M106,40v-8.6c0-2.4-2-4.4-4.4-4.4H91.4C89,27,87,29,87,31.4V40H106z"
                />
                <path
                  class="st2"
                  d="M106,40v-8.6c0-2.4-2-4.4-4.4-4.4H91.4C89,27,87,29,87,31.4V40H106z"
                />
                <line class="st2" x1="100" x2="100" y1="62" y2="41" />
                <line class="st2" x1="100" x2="100" y1="78" y2="69" />
                <rect
                  class="st1"
                  height="19"
                  transform="matrix(6.123234e-17 -1 1 6.123234e-17 55.5 137.5)"
                  width="8"
                  x="92.5"
                  y="31.5"
                />
                <rect
                  class="st16"
                  height="19"
                  transform="matrix(6.123234e-17 -1 1 6.123234e-17 55.5 137.5)"
                  width="8"
                  x="92.5"
                  y="31.5"
                />
                <rect
                  class="st2"
                  height="19"
                  transform="matrix(6.123234e-17 -1 1 6.123234e-17 55.5 137.5)"
                  width="8"
                  x="92.5"
                  y="31.5"
                />
              </g>
              <path
                class="st34"
                d="M49.1,88.7l3.5-2.9c0.3-0.2,0.6,0,0.6,0.4v2.6c0,0.4,0.3,0.6,0.6,0.4l4.6-3.8c0.3-0.2,0.6,0,0.6,0.4v2.9  c0,0,0.2,0.6,0.5,0.4l4.4-3.6c0.3-0.2,0.1,0.4,0.1,0.4v3c0,0.4,0.3,0.6,0.6,0.4l4.6-3.8c0.3-0.2,0.6,0,0.6,0.4v2.7  c0,0.4,0.3,0.6,0.6,0.4l3.8-3.1c0.3-0.2,0.6,0,0.6,0.4v2.5c0,0.4,0.3,0.6,0.6,0.4l3.7-3"
              />
              <line class="st34" x1="49.8" x2="78" y1="59" y2="59" />
              <line class="st34" x1="49.8" x2="78" y1="71" y2="71" />
              <line class="st34" x1="49.8" x2="63.9" y1="77" y2="77" />
              <line class="st34" x1="49.8" x2="78" y1="65" y2="65" />
            </svg>
          </div>
          <div class="content">
            <h2 class="title">Messaging</h2>
            <p class="subtitle">
              Found the best-suited one! Now take time to question the
              intention.
            </p>
          </div>
        </b-card>
      </div>

      <div class="btn-container mb-4 mt-4">
        <b-button class="custom-btn-1" @click="$router.push('/user/login')"
          >Get Started Now</b-button
        >
      </div>
    </b-container>

    <sectionFooter />
  </div>
</template>

<script>
import homepageHeader from "../components/Landingpage/homepageHeader.vue";
import sectionFooter from "../components/Landingpage/footerComponent.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    sectionFooter,
    homepageHeader,
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    proceed() {
      if (this.currentUser) {
        this.$router.push("/dashboard/powerups");
      } else {
        this.$router.push("/user/login");
      }
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1150px) {
  .main-section {
    margin-top: 100px;
  }
}

@media only screen and (min-width: 1150px) {
  .main-section {
    margin-top: 99px;
  }
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
  font-size: 14px;
}

.custom-btn-1:hover {
  background-color: #ac854e !important;
  transform: scale(110%);
}

.st0 {
  opacity: 0.2;
  fill: #ffffff;
}
.st1 {
  fill: #ffffff;
}
.st2 {
  fill: none;
  stroke: #242c88;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st3 {
  fill: #5e61a3;
}
.st4 {
  opacity: 0.5;
  fill: #242c88;
}
.st5 {
  fill: #39c89a;
}
.st6 {
  fill: #caeafb;
}
.st7 {
  fill: #589fff;
}
.st8 {
  fill: #ff5751;
}
.st9 {
  fill: #bc8d66;
}
.st10 {
  opacity: 0.7;
  fill: #ffffff;
}
.st11 {
  fill: #f1c92a;
}
.st12 {
  opacity: 0.4;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st13 {
  fill: #f3877e;
}
.st14 {
  fill: #83d689;
}
.st15 {
  opacity: 0.4;
  fill: #242c88;
}
.st16 {
  opacity: 0.2;
  fill: #242c88;
}

.st17 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 0.1, 6;
}
.st18 {
  fill: #ffc408;
}

.st19 {
  opacity: 0.4;
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 0.1, 6;
}
.st20 {
  fill: none;
  stroke: #caeafb;
  stroke-width: 12;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}
.st21 {
  fill: none;
  stroke: #caeafb;
  stroke-width: 7;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}
.st22 {
  opacity: 0.4;
  fill: none;
  stroke: #242c88;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st23 {
  opacity: 0.5;
}
.st24 {
  fill: #242c88;
}

.st25 {
  fill: none;
  stroke: #242c88;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 0.1, 6;
}
.st26 {
  opacity: 0.5;
  fill: #ffffff;
}
.st27 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st28 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st29 {
  fill: #e5bd9e;
}
.st30 {
  fill: #a06d47;
}

.st31 {
  opacity: 0.3;
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 0.1, 6;
}
.st32 {
  opacity: 0.1;
  fill: #242c88;
}
.st33 {
  opacity: 0.5;
  fill: #ff5751;
}
.st34 {
  opacity: 0.2;
  fill: none;
  stroke: #242c88;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st35 {
  opacity: 0.3;
  clip-path: url(#SVGID_2_);
}

.st36 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 0, 6;
}

.st37 {
  opacity: 0.3;
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 0, 6;
}
.st38 {
  clip-path: url(#SVGID_4_);
}
.st39 {
  opacity: 0.2;
  fill: none;
  stroke: #242c88;
  stroke-width: 9;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st40 {
  opacity: 0.3;
}
.st41 {
  opacity: 0.4;
  fill: #ffffff;
}
.st42 {
  opacity: 0.5;
  fill: #caeafb;
}
.st43 {
  opacity: 0.6;
  fill: #242c88;
}
.st44 {
  opacity: 0.5;
  fill: none;
  stroke: #242c88;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st45 {
  opacity: 0.3;
  fill: #242c88;
}
.st46 {
  opacity: 0.2;
}

.st47 {
  clip-path: url(#SVGID_6_);
  fill: none;
  stroke: #242c88;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st48 {
  opacity: 0.2;
  fill: none;
  stroke: #ffffff;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st49 {
  clip-path: url(#SVGID_8_);
  fill: #ffffff;
}

.st50 {
  clip-path: url(#SVGID_8_);
  fill: none;
  stroke: #242c88;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st51 {
  opacity: 0.2;
  clip-path: url(#SVGID_8_);
  fill: #242c88;
}

.st52 {
  opacity: 0.2;
  clip-path: url(#SVGID_8_);
  fill: none;
  stroke: #242c88;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st53 {
  fill: none;
  stroke: #242c88;
  stroke-width: 1.848;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st54 {
  opacity: 0.4;
  fill: none;
  stroke: #ffffff;
  stroke-width: 7;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st55 {
  opacity: 0.2;
  fill: none;
  stroke: #242c88;
  stroke-width: 7;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st56 {
  opacity: 7e-2;
  fill: #242c88;
}
.st57 {
  fill: none;
  stroke: #ffffff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st58 {
  opacity: 0.4;
  fill: none;
  stroke: #ffffff;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st59 {
  opacity: 0.2;
  fill: none;
  stroke: #242c88;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st60 {
  fill: none;
  stroke: #ff5751;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st61 {
  fill: none;
  stroke: #242c88;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}

.pricing-plus-page {
  background-image: url("@/assets/watermark.jpeg");
}

.top-heading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-heading {
  max-width: 60%;
  text-align: center;
}

.custom-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.feature-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem;
  width: 300px;
  padding: 1rem;
}

.feature-card .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main-section {
  min-height: 70vh;
}
</style>
