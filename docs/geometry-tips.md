---
id: geometry-tips
title: Useful Tips, Tricks and Shortcuts for working with FreeCAD
sidebar_label: Tips & Tricks
---

## Common tasks

:::note
Denominations for used solutions:
- **<span style={{ color: "blue" }}>Blue</span>** for workbench selection (e.g. **<span style={{ color: "blue" }}>Part</span>**)
- **<span style={{ color: "green" }}>Green</span>** for toolbar selection (e.g. **<span style={{ color: "green" }}>View</span>**)
- **<span style={{ color: "orange" }}>Orange</span>** for shortcut icons (e.g. **<span style={{ color: "orange" }}>Create a Cylinder</span>**)
:::

| Task                                     | Solution                                   | Icon                                   |
| ---------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| Move object                              | Left-click in tree view on object → *Transform*                     |
| Move sketch                              | Sketch Properties → *Attachment/Base* → *Placement* → *Position*        |
| Create a face from edges                 | **<span style={{ color: "blue" }}>Part</span>** → **<span style={{ color: "orange" }}>Advanced Utility</span>** → *Face from edges* | ![assets/tips-tricks/1.png](assets/tips-tricks/1.png) |
| Create an array from *objects*           | **<span style={{ color: "blue" }}>Draft</span>** → **<span style={{ color: "green" }}>Modification</span>** → *Array Tools* |
| Create an array in a *sketch*            | **<span style={{ color: "blue" }}>Sketcher</span>** → **<span style={{ color: "green" }}>Sketch</span>** → *Sketcher tools* → *Rectangular array* |
| Turn compound into multiple solids       | **<span style={{ color: "blue" }}>Part</span>** → Select your compound → **<span style={{ color: "orange" }}>Explode Compound</span>** |![assets/tips-tricks/1.png](assets/tips-tricks/2.png)              |
| Position one object next to another      | Select the first object, click **<span style={{ color: "green" }}>Part</span>** → *Attachment*, select the second object's face, set mode to "XY on plane"               |
| Change unit system or number of decimals | **<span style={{ color: "green" }}>Edit</span>** → *Preferences* → *General* → *Units*                                                                                       |
| Turn edge into wire with thickness       | Select your edge/wire and click **<span style={{ color: "orange" }}>Apply a thickness to a 1D wire</span>** | ![assets/tips-tricks/1.png](assets/tips-tricks/3.png) |
| Toggle object visibility                 | Right-click on the object in tree view and click *Show/Hide selection*.                                                        |
| Toggle grid visibility                   | **<span style={{ color: "blue" }}>Draft</span>** → **<span style={{ color: "green" }}>Utilities</span>** → *Toggle Grid*                                                                                        |

---

## Useful shortcuts
    
| Function                   | Shortcut     |
| -------------------------- | ------------ |
| Toggle object visibility   | *Space*        |
| Set camera rotation center | *Middle-click* |
| Pan camera                 | *Left-click*   |
| Import File                | *Drag&drop*    |
| Rectangle select objects   | *Shift+B*      |
| Rectangle select elements  | *Shift+E*      |
| Import File                | *Drag&drop*    |


---

## Problems

| Problem               | Solution                                   |
| ---------------------------- | ------------------------------------------ |
| Extrusion does not work      | Double-check that you use a sketch which is closed, without holes or branching wires |
| ![assets/tips-tricks/1.png](assets/tips-tricks/4.png)      | This can occur when creating wire geometries. **This is just a visualization problem and in no way affect the geometry - you can still use it**! |




