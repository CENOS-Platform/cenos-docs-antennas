---
id: release-notes
title: Release notes
sidebar_label: v2.x
---

## v2.2 (February 1st, 2023)

Bugfixes:

* Fixed message in Support Chat that says there is a version mismatch despite running in the latest version
* Fixed "Wire" role meshing roughly in some cases


## v2.2 (January 31st, 2023)

Features:

* Added application type for RFID
* Added Curvature Safety setting to Mesh Generation, allowing for more control over cylinder and other curved edge meshing

Improvements:

* Moved Touchstone export settings from Ports to Simulation Control
* Moved Touchstone export, Smith charts and CSV export to a separate folder in the case folder (“extra_results”)
* Improved overall error message handling and user experience

Bugfixes:

* Fixed “Cancel” not stopping mesh generation
* Fixed issue where non-incremented port ID’s caused the Touchstone export to fail
* Fixed Kernel error that randomly appeared at RUN
* Fixed the Core: XXXXXX error in simulation terminal


## v2.1.1 (December 12th, 2022)

Bugfixes:

* Fixed a problem which sometimes occured during post-proccesing

## v2.1 (December 8th, 2022)

Features:

* Added a mesh volume gradient, which affects the fineness of the mesh between volumes
* Added a Smith chart export to the case “results” folder
  * Currently works only on single and sequentially excited multiple discrete ports
* Added a Touchstone (SnP) file export to the case “results” folder.
  * Option to renormalize the port impedance seen in the Touchstone export from the Port section in Physics
  * Added option for complex port impedance
  * Currently works only on single and sequentially excited multiple discrete ports

Improvements:

* Improved the Mesh Generation screen for a better user experience
* Now possible to select individual faces for mesh refinement if they have been merged under a single role

Bugfixes:

* Cases with a coaxial port now show the combined results for a Parametric Study
* Excited waveguide ports no longer radiate in both directions

## v2.0.2 (October 19th, 2022)

Improvements:

* Removed redundant information from the log

Bugfixes:

* Fixed an issue where GetDP caused some cases to not calculate
* PDF report can now be generated for cases with a coaxial port
* Dielectric and Substrate roles now mesh properly using the automatic mesh
* Fixed an issue where it was not possible to send updated geometry with topology changes from FreeCAD
* Fixed inaccurate radiated power values in the CSV export
* Fixed identical S-parameters in cases with multiple coaxial ports

## v2.0.1 (September 6th, 2022)

Features:

* Reintroduced an improved coaxial port
* Added S-parameter phase

Improvements:

* Python is no longer needed to be installed separately
* Removed legacy post-processing menu
* Improved waveguide port accuracy
* Improved updating variables from FreeCAD in “Geometry variables”

Bugfixes:

* Hovering over Cartesian plots of radiation pattern now shows correct angle and directivity
* Adding lumped elements in Custom and Wire application types is now possible
* Fixed a problem where it was not possible to run sequential simulation with lumped elements and multiple ports
* Fixed inaccurate calculation when using non-PEC conductors and lumped elements
* Fixed an issue where mesh preview would not show for shared cases
* Fixed an issue with radiation patterns in PDF reports
* Fixed an issue where horn antenna simulations yielded inaccurate results
* Fixed inability to select TE01 mode
* Fixed a bug where variables from FreeCAD disappeared when set to “0” in “Geometry variables”
* Fixed a bug where variables from FreeCAD updated slowly in “Geometry variables”
* Fixed an issue where results wouldn’t show for cases with Patch and Ground volumes

## v2.0.0 (June 15, 2022)

* Improved CAD import and handling
* Far better automatic meshing
* Manual meshing interface
* User-friendly point-based port assignment
* Lumped elements for RLC series & parallel
* Waveguides
* Clear notifications in case CAD processing or automatic meshing failed, highlighting the geometry object that caused the problem
* CAD re-loading keeps all relevant settings
* Faster calculation/post-processing speed
* Problem-specific result postprocessing
* Other improvements in UI and UX
* Minor physics optimizations
* Numerous bug fixes and improvements

[Release notes of the previous version](/release-notes-v1)
