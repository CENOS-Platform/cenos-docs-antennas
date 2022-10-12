---
id: release-notes
title: Release notes
sidebar_label: v2.x
---

## v2.0.2 (October 14th, 2022)

Improvements:

* Removed redundant information from the log

Bugfixes:

* Fixed an issue where GetDP caused some cases to not calculate
* PDF report can now be generated for cases with a coaxial port
* Dielectric and Substrate roles now mesh properly using the automatic mesh
* Fixed sending updated geometry with topology changes from FreeCAD
* Fixed inaccurate radiated power values in the CSV export

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
