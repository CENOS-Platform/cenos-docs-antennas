---
id: quickstart-results
title: Results and post-processing
sidebar_label: Result evaluation
---

Once the simulation is done, results will be processed and opened in a separate window. *CENOS Antenna Design* app offers different ways and tools to analyze your antenna design. **In this section we will learn how to use CENOS to analyze antenna simulation results**.

**Watch a short video on how to evaluate results in CENOS Antenna Design app**:

<p align="center">

[![Results video](assets/utilities/3.png)](https://www.youtube.com/watch?v=ZVUSHj0AmAI&list=PLtRpbWakrmMf29rhPnm0bxjosBow-nM8q&index=3)

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

![Results](assets/results/1.png)

---

### Electric/magnetic field

By default the *Electric field* is visualized,.

<p align="center">

![Electric field](assets/results/10.png)

</p>

You can **change this visualization to see the** ***Magnetic field*** as well.

To switch between different field visualizations:

1. **Select the left side view** (should  be highlighted by a blue outline)

2. Select the **Dielectric** in the *Pipeline browser* tree.

<p align="center">

![Dielectric](assets/results/11.png)

</p>

3. **Change the field selection** to *Magnetic field*.

<p align="center">

![Magnetic field](assets/results/12.png)

</p>

Now the new field is visualized!

<p align="center">

![Magnetic field2](assets/results/13.png)

</p>

:::tip
In the same way you can change visualization for *Far Field* as well.
1. Select the left view
2. Select *3D Far Field* in *Pipeline Browser*
3. Change the field selection in the dropdown.
:::

---

### Frequency range

If you calculated your design using *frequency sweep*, you can visualize results for different frequencies by selecting the frequency of interest.

<p align="center">

![Frequencies](assets/results/2.png)

</p>

---

### Radiation pattern

You can analyze the radiation pattern by switchin to **Radiation patterns** tab.

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

*CENOS Antenna Design* outputs a .csv file with all of the global values such as **S11, VSWR**, and many more. You can open this in Excel, for example, where you can then plot, compare and analyze the results however you wish.

![assets/quickstart/Untitled17.png](assets/quickstart/Untitled17.png)

---

## PDF Reports

A very useful feature for reports is CENOS **built-in PDF report generator**. With this tool you can generate a **PDF file with your simulation setup and result overview**, which you can easily share with others!

![assets/quickstart/Untitled19.png](assets/quickstart/Untitled19.png)