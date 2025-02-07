# Team2Oblig1

```mermaid
flowchart TD
  subgraph Body
    nav["Nav Column\n(16vw)"]:::navStyle
    subgraph MainCol["Main Column\n(Article Container)"]:::mainColStyle
      header["Header Row\n(16vh)"]:::headerStyle
      
      subgraph Row2["Row 2"]:::row2Style
        left["Left Container Box w/Image\n(34vw, 32vh)"]:::leftStyle
        
        subgraph MiddleBox["Middle Container Box\n(Inner Grid)"]:::middleBoxStyle
          status["Status Box\n(20vw, 10vh)"]:::statusStyle
          subgraph MidRow2["Row 2"]:::midRow2Style
            consumption["Consumption Box\n(9vw, 10vh)"]:::consumptionStyle
            total["Total Charging Box\n(11vw, 10vh)"]:::totalStyle
          end
          realtime["Real Time Power Usage Box\n(20vw, 10vh)"]:::realtimeStyle
        end
        
        subgraph RightBox["Right Container Box\n(Inner Grid)"]:::rightBoxStyle
          range["Range Selector & Filter Icon\n(30vw, 5vh)"]:::rangeStyle
          subgraph MonthIcons["Month Icons Row"]:::monthIconsStyle
            icon1["Icon 1\n(7.5vw, 15vh)"]:::iconStyle
            icon2["Icon 2\n(7.5vw, 15vh)"]:::iconStyle
            icon3["Icon 3\n(7.5vw, 15vh)"]:::iconStyle
            icon4["Icon 4\n(7.5vw, 15vh)"]:::iconStyle
          end
          minmax["Min Max Total Use Box\n(30vw, 10vh)"]:::minmaxStyle
        end
      end
      
      subgraph Row3["Row 3"]:::row3Style
        graphSVG["Left Box w/Graph SVG\n(54vw, 52vh)"]:::graphSVGStyle
        subgraph RightCol["Right Column\n(Two Rows)"]:::rightColStyle
          current["Current State Container Box\n(30vw, 20vh)"]:::currentStyle
          energy["Energy Consumption Container Box\n(30vw, 32vh)"]:::energyStyle
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
