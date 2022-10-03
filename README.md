- jest 的配置
  - 默认配置
    - 暴露默认配置 `npx jest --init`
      - 选择后，新增 jest.config
        - 测试覆盖率 `npx jest --coverage`
  - `--watch` 可以调用 jest Watch Usage 提供jest的后续
  ```
  "scripts": {
    "test": "jest --watch"
  },
  ```
    - 例如：执行所有测试、只执行失败的测试、只执行git修改的测试
