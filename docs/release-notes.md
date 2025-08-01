---
id: release-notes
title: Release notes
sidebar_label: v4.x
---

## v4.1.0  (June 21, 2025)

Features:

* Added support for parametric study when loading multiple CAD files
* Implemented support for geometries with floating faces
* Introduced results renormalization functionality in results viewer

  
Improvements:

* UI now shows loading progress for large cases
* Improved error messages during meshing of periodic arrays
* Added support for FreeCAD 1.0.0, which will be automatically downloaded for new users
* Added option to save files with or without results

  
Bugfixes:

* Fixed issue where physics changes triggered mesh update
* Fixed unexpected closure of results connection
* Fixed issue where adding lumped elements or discrete ports deleted the existing mesh
* Fixed case opening failure in CENOS following license data check
* Current density and electromagnetic fields are now displayed in solids with real conductive materials
* Fixed incorrect positioning of current density vectors in specific cases
* Parametric study cases can now be removed after a failure


## v4.0.1  (April 16, 2025)

Features:

* New button to compress log files added to the File menu.
  
Improvements:

* Improved stability of the Preview window interaction.
* Updated the default values in automatic meshing to better suit wire antenna geometries.
* Improved validation for input values of passive components.
* Improved recognition of FreeCad datasheet rows in CENOS.
* Updated display of wavelength resolution limit.
  
Bugfixes:

* Fixed issue with name editing for discrete ports and lumped elements.
* Fixed irregular meshing in specific geometries.
* Fixed PDF export issue for single-frequency simulations.
* Resolved issue with frequency display in 2D graphs where values remained static regardless of the actual data.
* Fixed issue where periodic array results were not refreshed when reopening a case for the second time.
* Fixed visualization of Electric Field vectors.
* Fixed issue with missing prefix in axial ratio results.
* Fixed automatic meshing update with periodic arrays tool.


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
