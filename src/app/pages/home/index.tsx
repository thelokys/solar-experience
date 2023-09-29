import React from "react";

import * as S from "./styles";
import { Stage, Layer, Rect } from "react-konva";
import Konva from "konva";

import { Rectangle2D } from "./types/rectangle-2d";
import { generateId } from "./utils/generate-id";
import { detectionOverlap } from "./detection-overlap";

export function Home() {
  const [rects, setRects] = React.useState<Rectangle2D[]>([]);

  const getAxisFromTarget = React.useCallback(
    (e: Konva.KonvaEventObject<DragEvent>) => {
      return {
        id: e.target.id(),
        newX: e.target.x(),
        newY: e.target.y(),
      };
    },
    []
  );

  const handlePressDetectionColision = React.useCallback(() => {
    const updateRects = [...rects];
    const collisionsSet = new Set();
    for (let i = 0; i < updateRects.length; i++) {
      for (let j = i + 1; j < updateRects.length; j++) {
        const elementA = updateRects[i];
        const elementB = updateRects[j];
        const isColliding = detectionOverlap(elementA, elementB);

        if (isColliding) {
          collisionsSet.add(elementA.id);
          collisionsSet.add(elementB.id);
        }
      }
    }
    const collissions = Array.from(collisionsSet);

    setRects(
      updateRects.map((item) => {
        const foundItem = collissions.find(
          (collisionId) => collisionId === item.id
        );
        return foundItem
          ? { ...item, isColliding: true }
          : { ...item, isColliding: false };
      })
    );
  }, [rects]);

  const handleMoveEnd = React.useCallback(
    (e: Konva.KonvaEventObject<DragEvent>) => {
      const rectDragged = getAxisFromTarget(e);

      setRects((prevState) => {
        const newPositions = prevState.map((rect) => {
          if (rectDragged.id === rect.id) {
            return {
              ...rect,
              x: rectDragged.newX,
              y: rectDragged.newY,
            };
          }
          return rect;
        });

        const updateRects = [...newPositions];
        const collisionsSet = new Set();
        for (let i = 0; i < updateRects.length; i++) {
          for (let j = i + 1; j < updateRects.length; j++) {
            const elementA = updateRects[i];
            const elementB = updateRects[j];
            const isColliding = detectionOverlap(elementA, elementB);

            if (isColliding) {
              collisionsSet.add(elementA.id);
              collisionsSet.add(elementB.id);
            }
          }
        }
        const collissions = Array.from(collisionsSet);

        return updateRects.map((item) => {
          const foundItem = collissions.find(
            (collisionId) => collisionId === item.id
          );
          return foundItem
            ? { ...item, isColliding: true }
            : { ...item, isColliding: false };
        });
      });
    },
    []
  );

  const handleMoveStart = React.useCallback(
    (e: Konva.KonvaEventObject<DragEvent>) => {
      const rectDragged = getAxisFromTarget(e);

      // coloca quem foi modificado em ultimo fazendo com que aparece primeiro
      setRects((prevState) => {
        const items = prevState.slice();
        const item = items.find((i) => i.id === rectDragged.id)!;
        const index = items.indexOf(item);
        items.splice(index, 1);
        items.push(item);
        return items;
      });
    },
    []
  );

  const handlePressNew = React.useCallback(() => {
    setRects((prevState) => {
      return [
        ...prevState,
        {
          id: generateId(),
          x: 200,
          y: 300,
          width: 90,
          height: 45,
          angle: 90,
        },
      ];
    });
  }, []);

  return (
    <S.Container>
      <S.Toolbar>
        <S.Tool onClick={handlePressNew}>adicionar</S.Tool>
        <S.Tool onClick={handlePressDetectionColision}>colisao</S.Tool>
      </S.Toolbar>
      <S.Whiteboard>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {rects?.map((rect) => (
              <React.Fragment key={rect.id}>
                <Rect
                  x={rect.x}
                  y={rect.y}
                  id={rect.id}
                  width={rect.width}
                  height={rect.height}
                  rotation={rect.angle}
                  name="fillShape"
                  fill={rect.isColliding ? "red" : "grey"}
                  draggable
                  onDragStart={handleMoveStart}
                  onDragEnd={handleMoveEnd}
                />
              </React.Fragment>
            ))}
          </Layer>
        </Stage>
      </S.Whiteboard>
    </S.Container>
  );
}
