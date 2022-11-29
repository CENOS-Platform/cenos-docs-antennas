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

---

## Overview

To analyze your antenna simulation, you have 3 different tools for that:

- **ParaView** (visual results)
- **Spreadsheet** (easy for result analysis in Excel)
- **PDF** (simulation report generation)

You can **access these directly** through CENOS Desk view under *Visualization* block.

<p align="center">

![Result selection](assets/results/5.png)

</p>

---

## ParaView

When the simulation is finished, a new *ParaView* window will open with processed results.

### 3D View

In the *3D View* tab you can see your antenna with ***Electric field*** visualized on the right, together with the ***Radiation pattern*** visualized on the left.

![Results](assets/results/1.png)

---

#### Frequency range

If you calculated your design using *frequency sweep*, you can visualize results for different frequencies by selecting the frequency of interest.

<p align="center">

![Frequencies](assets/results/2.png)

</p>

---

### Radiation pattern

You can analyze the radiation pattern by switching to **Radiation patterns** tab.

<p align="center">

![Radiation pattern](assets/results/3.png)

</p>

Here you can find radiation patterns displayed in **cartesian** and **polar** coordinates.

![assets/quickstart/Untitled14.png](assets/results/4.png)

---

### S11 and other charts

To analyze parameters such as **S11**, **VSWR**, **Impedance**, **Resistance**, **Reactance** and **Applied Power**, switch to *S11 and other charts* tab.

<p align="center">

![S11 and other parameters](assets/results/7.png)

</p>

![assets/quickstart/Untitled14.png](assets/results/8.png)

:::tip
For *S11 and other charts* you can **set a custom frequency range** at the bottom left part of the window, in the properties:

![assets/quickstart/Untitled14.png](assets/results/9.png)
:::

---

## Spreadsheet

*CENOS Radio Frequency* outputs a .csv file with all of the global values such as **S11, VSWR**, and many more. You can open this in Excel, for example, where you can then plot, compare and analyze the results however you wish.

![assets/quickstart/Untitled17.png](assets/quickstart/Untitled17.png)

---

## PDF Reports

A very useful feature for reports is CENOS **built-in PDF report generator**. With this tool you can generate a **PDF file with your simulation setup and result overview**, which you can easily share with others!

![assets/quickstart/Untitled19.png](assets/quickstart/Untitled19.png)
