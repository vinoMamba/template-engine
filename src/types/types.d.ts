export interface Label {
  id: string;
  type: 0 | 1 | 2  // 0:预设, 1:自定义, 2: 历史
  name: string;
  width: number;
  height: number;
  rotate: 0 | 90 | 180 | 270; // 0:0°, 90:90°, 180:180°, 270:270°
  block: Block[]
  inUse: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface Block {
  id: string
  type: any
  focus: boolean
  //TODO
}