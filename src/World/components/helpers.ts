import { AxesHelper, GridHelper } from 'three';

export function createAxesHelper(size?: number): AxesHelper {
  const axesHelper = new AxesHelper(size);
  return axesHelper;
}

export function createGridHelper(
  size?: number,
  divisions?: number
): GridHelper {
  const gridHelper = new GridHelper(size, divisions);
  return gridHelper;
}
