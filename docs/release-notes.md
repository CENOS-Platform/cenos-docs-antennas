---
id: release-notes
title: Release notes
sidebar_label: v4.x
---


## v4.0.0 (September Xth, 2024)

Features:

* Added Periodic Array Analysis
* Implemented Fast Frequency Sweep for fast result interpolating simulations
* Added Perfectly Matched Layers
* Implemented support for coaxial and discrete ports in the same simulation
* Implemented lumped element losses as a result
* Added error estimation of calculated results

Improvements:

* Changed solver for discrete and coaxial port from GetDP to NGsolve
   * NGsolve has improved system resource utilization over GetDP
   * Calculations perform faster with NGsolve
   * Removed Parallel Processing as NGsolve utilizes resources better and does not benefit from parallelization of frequency calculation
* Changed how multiport cases are handled
   * Removed excitation type selection from Simulation Control
   * Active S-parameters are now available for all multiport cases
   * All coaxial and discrete multiport simulations now produce individual and combined electric field from each port
* It is now possible to force stop simulations in progress
* Far Field calculation is now an opt-in feature
   * If the far field information is not calculated during the simulation, the far field can be calculated in Python Plots

Bugfixes:

* RAM insufficiencies will now produce an understandable error message
* Fixed message stating case is already open in another instance when it is not
* Fixed air domain definitions disappearing when resetting the application type after reloading the CAD file
* Fixed small flicker in inputted values in windows in the Physics section
* It is now possible to open cases that were not saved properly
* Fixed "Geometry could not be replaced during variable updating: Unknown exception" error appearing in Geometry Variables and Parametric Study
* Fixed issue where the Parametric Study would fail due to mesh inconsistency with geometry data
* Fixed issue where cases could not open due to missing case2.json file
