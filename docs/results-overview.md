---
id: results-overview
title: Result overview
sidebar_label: Result overview
---

Once the simulation is done, results will be processed and opened in a separate window. *CENOS Radio Frequency* app offers different ways and tools to analyze your antenna design.

**In this section we will go over the default result evaluation layout for antenna simulation results**.

**Watch a short video on how to evaluate results in CENOS Radio Frequency app**:

<p align="center">

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZVUSHj0AmAI?list=PLtRpbWakrmMf29rhPnm0bxjosBow-nM8q" title="CENOS Antenna Design - Result evaluation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</p>


## Overview

To analyze your antenna simulation, you have 4 different options for that:

- **ParaView** (visual results).
- **Spreadsheet** (easy for result analysis in Excel).
- **Touchstone file** (documenting the n-port network parameter data).
- **PDF** (simulation report generation) - _Pro plan only_.

You can **access these directly** through CENOS Desk view under *Visualization* block.

<p align="center">

![Results selection](assets/results/5.png)

</p>


## ParaView

When the simulation is finished, a new *ParaView* window will open with processed results.


### 3D View

In the *3D View* tab you can see your antenna with ***Electric field*** visualized on the right, together with the ***Radiation pattern*** visualized on the left.
  
![Results](assets/results/1.png)


#### Frequency range

If you calculated your design using *frequency sweep*, you can visualize results for different frequencies by selecting the frequency of interest.

<p align="center">

![Frequencies](assets/results/2.png)

</p>


### Radiation pattern

You can analyze the radiation pattern by switching to **Radiation patterns** tab.

<p align="center">

![Radiation pattern](assets/results/3.png)

</p>

Here you can find radiation patterns displayed in **cartesian** and **polar** coordinates.

![assets/quickstart/Untitled14.png](assets/results/4.png)


### Frequency charts

To analyze parameters such as **S11 magnitude**, **S11 phase**, **Impedance**, **Resistance**, **Reactance** and **VSWR**, switch to *Frequency charts* tab.

<p align="center">

![S11 and other parameters](assets/results/7.png)

</p>

![assets/quickstart/Untitled14.png](assets/results/8.png)


## Parametric Study Results

If you used the [Parametric Study](physics-overview#parametric-study) in the simulation of your RF model, the results you will see automatically displayed will be the **S-parameter values of all cases**. This way you can directly compare the performance between cases with different dimensions!

<p align="center">

![S11 results](assets/results/31.png)

</p>

By clicking on the _PARAMETRIC STUDY_ box you can see the number of simulated cases and the dimensions of the parameters that were modified.  

If you need to see the rest of the results for each case such as the radiation pattern or the electric field it is possible to do so by clicking on the results box of the case of interest! By doing so you will see that a **Paraview window is automatically displayed** with all the results.

<p align="center">

![Parametric study box](assets/results/32.png)

</p>

<p align="center">

![Parametric study results table](assets/results/33.png)

</p>

Once you have the results of the cases you have set up, you may only be interested in the data of some specific cases. For this, there is the possibility to deactivate the graphs shown for specific cases, to do so follow the steps below:

1. Open the Paraview window with the **combined results** view. 

2. On the left side you will find the **Python console** with the list of parametric study cases. Delete the cases that are not of interest to you.

<p align="center">

![Python console](assets/results/49.png)

</p>

3. Click out of the Python console and the plots will be updated automatically!

<p align="center">

![Parametric study results](assets/results/50.png)

</p>



## Spreadsheet

*CENOS Radio Frequency* outputs a .csv file with all of the global values such as **S11, VSWR**, and many more. You can open this in Excel, for example, where you can then plot, compare and analyze the results however you wish.

<p align="center">

![Spreadsheet](assets/results/17.png)

</p>


## PDF Reports 

A very useful feature for reports is CENOS **built-in PDF report generator**. With this tool you can generate a **PDF file with your simulation setup and result overview**, which you can easily share with others!

<p align="center">

![PDF report](assets/results/19.png)

</p>

## Extra results

In the _extra_results_ folder you can find **more information about your case**! You can easily access these results from the _CENOS Radio Frequency_ interface, just click on the folder icon under the visualization box. *CENOS RF* automatically produces a **Touchstone file** export for the impedance you set for your port, as well as any impedance you may have defined with the impedance renormalization settings.
<p align="center">

![extra results folder](assets/results/45.png)

</p>

The **Touchstone file** corresponding to your case results for future processing will be available here! In addition, _CENOS Radio Frequency_ provides you with an image corresponding to the **Smith Chart**! 

<p align="center">

![extra results folder](assets/results/46.png)

</p>

<p align="center">

![Smith chart](assets/results/47.png)

</p>

:::note

Remember that by using the option to **[renormalize the impedance](physics-overview#touchstone-export)** you will have the option to display the results in _dB and angle_ or in _Real and Imaginary_ format. Depending on the option you choose, your data will be displayed. 

<p align="center">

![impedance](assets/results/48.png)

</p>

:::
