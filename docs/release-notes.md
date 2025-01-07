---
id: release-notes
title: Release notes
sidebar_label: v4.x
---


## v4.0.0 (January 7, 2025)

Features:

* Implemented periodic structure support for Phased Array simulations
* Implemented Fast Frequency Sweep

Improvements:

* Changed solver from GetDP to NGsolve for greatly improved stability and simulation speed
   * Removal of parallel process calculation
* Updated Thin PCB detection when importing CAD file
* Excitation type removed
   * Simultaneous excitation has been eliminated in favor of postprocessing of sequential excitation results, but can now be done in postprocessing
* Implemented lumped element losses
* Added active S-parameters charts section in all multiport simulations
* Implemented Hard Stop to immediately stop the simulation process
* Model outline can now be scaled and repositioned in the radiation patterns window
* Improved error message handling and user experience

Bugfixes:

* Fixed issue with multiple coaxial ports
* Fixed issue where phase shifting did not work in coaxial port cases
* Fixed incorrect Gain values in multiple port Simultaneous Excitation cases
* Fixed issue where airbox domain is eliminated when replacing CAD geometry
* Compressing the case with results is disabled if they do not exist
* Fixed issue when sending the geometry from FreeCAD to CENOS if the case has not been saved
* Improved the case saving process to prevent corrupted files
* Adjustment in case warning saved when closing case
* Geometry variables can now be updated in the physics from the first attempt
* Parametric study now can be stopped
* Fixed issue where the 'Import CAD' button in CENOS did not work when creating a case using the Geometry Editor approach
* Combined results of a parametric study can now be opened after deleting a subcase
* Fixed impedance normalization in Smith Chart
* The frequency step change no longer affects the mesh
* Fixed the overlap of scales in the electric/magnetic field
* Fixed Kernel error due to missing VC++ redistributables
* Fixed issue where recalculated results would not open correctly when one of the ports was removed
