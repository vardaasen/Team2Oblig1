# Team2Oblig1

```mermaid
flowchart LR
  subgraph Body
    nav["Nav Column\n(16vw)"]
    subgraph MainCol["Main Column\n(Article Container)"]
      direction TB
      header["Header Row\n(16vh)"]
      
      %% Row 2: arranged horizontally (LR) with reversed order:
      %% Right Container Box, then Middle Container Box, then Left Container Box.
      subgraph Row2["Row 2"]
        direction LR
        %% Right Container Box (appears left)
        subgraph RightBox["Right Container Box\n(Inner Grid)"]
          direction TB
          range["Range Selector & Filter Icon\n(30vw, 5vh)"]
          subgraph MonthIcons["Month Icons Row"]
            direction LR
            icon1["Icon 1\n(7.5vw, 15vh)"]
            icon2["Icon 2\n(7.5vw, 15vh)"]
            icon3["Icon 3\n(7.5vw, 15vh)"]
            icon4["Icon 4\n(7.5vw, 15vh)"]
          end
          minmax["Min Max Total Use Box\n(30vw, 10vh)"]
        end
        
        %% Middle Container Box (stays in the middle)
        subgraph MiddleBox["Middle Container Box\n(Inner Grid)"]
          direction TB
          status["Status Box\n(20vw, 10vh)"]
          subgraph MidRow2["Row 2"]
            direction LR
            consumption["Consumption Box\n(9vw, 10vh)"]
            total["Total Charging Box\n(11vw, 10vh)"]
          end
          realtime["Real Time Power Usage Box\n(20vw, 10vh)"]
        end
        
        %% Left Container Box (appears right)
        left["Left Container Box w/Image\n(34vw, 32vh)"]
      end
      
      %% Row 3: arranged horizontally so that the graph is left and the right column is side‑by‑side.
      subgraph Row3["Row 3"]
        direction LR
        graphSVG["Left Box w/Graph SVG\n(54vw, 52vh)"]
        subgraph RightCol["Right Column\n(Two Rows)"]
          direction TB
          current["Current State Container Box\n(30vw, 20vh)"]
          energy["Energy Consumption Container Box\n(30vw, 32vh)"]
        end
      end
    end
  end

%% Class definitions (the "hack")
classDef navStyle fill:#f4f4f4,stroke:#333,stroke-width:1px, padding:10px;
classDef mainColStyle fill:#e8e8e8,stroke:#333,stroke-width:1px, padding:10px;
classDef headerStyle fill:#cce5ff,stroke:#333,stroke-width:1px, padding:10px;
classDef row2Style fill:#f9f9f9,stroke:#333,stroke-width:1px, padding:10px;
classDef leftStyle fill:#dff0d8,stroke:#333,stroke-width:1px, padding:10px;
classDef middleBoxStyle fill:#fcf8e3,stroke:#333,stroke-width:1px, padding:10px;
classDef statusStyle fill:#d9edf7,stroke:#333,stroke-width:1px, padding:10px;
classDef midRow2Style fill:#eeeeee,stroke:#333,stroke-width:1px, padding:10px;
classDef consumptionStyle fill:#f2dede,stroke:#333,stroke-width:1px, padding:10px;
classDef totalStyle fill:#f2dede,stroke:#333,stroke-width:1px, padding:10px;
classDef realtimeStyle fill:#d9edf7,stroke:#333,stroke-width:1px, padding:10px;
classDef rightBoxStyle fill:#fcf8e3,stroke:#333,stroke-width:1px, padding:10px;
classDef rangeStyle fill:#dff0d8,stroke:#333,stroke-width:1px, padding:10px;
classDef monthIconsStyle fill:#f9f9f9,stroke:#333,stroke-width:1px, padding:10px;
classDef iconStyle fill:#eeeeee,stroke:#333,stroke-width:1px, padding:10px;
classDef minmaxStyle fill:#d9edf7,stroke:#333,stroke-width:1px, padding:10px;
classDef row3Style fill:#f9f9f9,stroke:#333,stroke-width:1px, padding:10px;
classDef graphSVGStyle fill:#dff0d8,stroke:#333,stroke-width:1px, padding:10px;
classDef rightColStyle fill:#fcf8e3,stroke:#333,stroke-width:1px, padding:10px;
classDef currentStyle fill:#d9edf7,stroke:#333,stroke-width:1px, padding:10px;
classDef energyStyle fill:#d9edf7,stroke:#333,stroke-width:1px, padding:10px;

%% Assign classes to nodes by id
class nav navStyle;
class MainCol mainColStyle;
class header headerStyle;
class left leftStyle;
class status statusStyle;
class consumption consumptionStyle;
class total totalStyle;
class realtime realtimeStyle;
class range rangeStyle;
class icon1 iconStyle;
class icon2 iconStyle;
class icon3 iconStyle;
class icon4 iconStyle;
class minmax minmaxStyle;
class graphSVG graphSVGStyle;
class current currentStyle;
class energy energyStyle;
```

***

```plaintext
/*

****body*******************************************************************************************************************************************************************
* | nav col | main col                                                                                                                                                  | *
* | c-1     | c-2                                                                                                                                                       | *
* | (16vw)  | |-------------------------------------------------------------------------------------------------------------------------------------------------------| | *
* |         | | article container                                                                                                                                     | | *
* |         | | |---------------------------------------------------------------------------------------------------------------------------------------------------| | | *
* |         | | | header row                                                                                                                                        | | | *
* |         | | | c-2-r-1 (16vh)                                                                                                                                    | | | *
* |         | | |---------------------------------------------------------------------------------------------------------------------------------------------------| | | *
* |         | | | left container box w/image | middle container box w/ small status boxes   | right container box w/filter selection and month icon boxes           | | | *
* |         | | | c-2-r-2-c-1-b (34vw, 32vh) | c-2-r-2-c-2 has inner grid layout            | c-2-r-2-c-3 has inner grid layout                                     | | | *
* |         | | |                            | |------------------------------------------| | |-------------------------------------------------------------------| | | | *
* |         | | |                            | | status box                               | | | range selector and filter icon strip/box                          | | | | *
* |         | | |                            | | c2-ig-r1-b                               | | | c3-ig-r1                                                          | | | | *
* |         | | |                            | | (20vw, 10vh)                             | | | (30vw, 5vh)                                                       | | | | *
* |         | | |                            | |------------------------------------------| | |-------------------------------------------------------------------| | | | *
* |         | | |                            | | consumption box    | total charging box  | | | month icons                                                       | | | | *
* |         | | |                            | | c2-ig-r2c1-b       | c2-ig-r2c2-b        | | | |---------------|---------------|---------------|---------------| | | | | *
* |         | | |                            | | (9vw, 10vh)        | (11vw, 10vh)        | | | | icon-1        | icon-2        | icon-3        | icon-4        | | | | | *
* |         | | |                            | |                    |                     | | | | c3-ig-r2-c1-b | c3-ig-r2-c2-b | c3-ig-r2-c3-b | c3-ig-r2-c4-b | | | | | *
* |         | | |                            | |                    |                     | | | | (7.5vw, 15vh) | (7.5vw, 15vh) | (7.5vw, 15vh) | (7.5vw, 15vh) | | | | | *
* |         | | |                            | |                    |                     | | | |---------------|---------------|---------------|---------------| | | | | *
* |         | | |                            | |------------------------------------------| | |-------------------------------------------------------------------| | | | *
* |         | | |                            | | real time power usage box                | | | min max total use box                                             | | | | *
* |         | | |                            | | c2-ig-r3-b                               | | |  c3-ig-r3-b                                                       | | | | *
* |         | | |                            | | (20vw, 10vh)                             | | |  (30vw, 10vh)                                                     | | | | *
* |         | | |                            | |------------------------------------------| | |-------------------------------------------------------------------| | | | *
* |         | | |---------------------------------------------------------------------------------------------------------------------------------------------------| | | *
* |         | | | left box w/graph svg                                                      | right column w/ 2 rows for 2 container boxes (30vw, 52vh)             | | | *
* |         | | | c-2-r-3-c-1-b                                                             | |-------------------------------------------------------------------| | | | *
* |         | | | (54vw, 52vh)                                                              | | current state container box (30vw, 20vh)                          | | | | *
* |         | | |                                                                           | | c-2-r-3-c-2-r-1-b                                                 | | | | *
* |         | | |                                                                           | |-------------------------------------------------------------------| | | | *
* |         | | |                                                                           | | energy consumption container box (30vw, 32vh)                     | | | | *
* |         | | |                                                                           | | c-2-r-3-c-2-r-2-b                                                 | | | | *
* |         | | |---------------------------------------------------------------------------|-----------------------------------------------------------------------| | | *
* |         | |-------------------------------------------------------------------------------------------------------------------------------------------------------| | *
* |         |                                                                                                                                                           | *
***************************************************************************************************************************************************************************
*/
```
