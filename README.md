# Vue 3 Tooltip Directive

A flexible and lightweight tooltip directive for Vue 3 applications.

## Features

- Simple and intuitive usage
- Multiple placement options
- Easy global installation
- Lightweight and performant
- TypeScript support

## Installation

```bash
npm install @uniquedj95/vtooltip
# or
yarn add @uniquedj95/vtooltip
```

## Usage

### Global Registration

In your `main.ts` or `main.js`:

```typescript
import { createApp } from 'vue'
import vTooltip from '@uniquedj95/vtooltip'

const app = createApp(App)
app.use(vTooltip)
```

### Basic Usage

```vue
<!-- Simple string tooltip -->
<button v-tooltip="'Click me'">Hover</button>

<!-- Object configuration -->
<button 
  v-tooltip="{ 
    text: 'Custom tooltip', 
    placement: 'bottom' 
  }"
>
  Hover
</button>
```

## Configuration Options

### Tooltip Value

The directive accepts two types of values:

1. **String**: Direct tooltip text
   ```vue
   <div v-tooltip="'Simple tooltip'">Hover me</div>
   ```

2. **Object**: Advanced configuration
   ```vue
   <div 
     v-tooltip="{
       text: 'Detailed tooltip',
       placement: 'top' // or 'bottom', 'left', 'right'
     }"
   >
     Hover me
   </div>
   ```

### Placement Options

- `top` (default)
- `bottom`
- `left`
- `right`

## Customization

For custom styling, target the `.tooltip` class in your CSS:

```css
.tooltip {
  background-color: #333;
  color: white;
  /* Add your custom styles */
}
```

## TypeScript Support

The package includes TypeScript definitions for full type support.

## Performance

- Lightweight implementation
- Minimal DOM manipulation
- Efficient event handling

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request