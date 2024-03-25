# Technical Documentation of Components

## Folder "context"

Here reside large states consumed throughout the application.

### Breadcumbs Context

The context is created to manage breadcrumb navigation in an application.

Then, it defines a component called BreadCrumbProvider, which is responsible for providing the breadcrumb context to its descendant components. Inside this component, it uses the useState() hook to manage the state of breadcrumbs.

The updateBreadcrumbs function is used to update the breadcrumbs state with new values.

Finally, the BreadCrumbProvider component wraps its children with BreadCrumbContext.Provider, passing down the breadcrumbs state and the updateBreadcrumbs function as the context value.

PropTypes are used to ensure that the children prop provided to BreadCrumbProvider is of type node, which allows any kind of React node to be passed as children.

## Folder "components"

This folder contains components responsible for logic or data manipulation within the application.

### Container Details

#### Functionality:

Renders a container with detailed information about a cryptocurrency, including market data, price graphic, and description.

#### Props:

- `data` (object): Object containing cryptocurrency data, including description, market data, symbol, and image.
- `graphic` (object): Object containing graphic data for the cryptocurrency, including market caps, prices, and total volumes.

### Container Items

#### Functionality:

Renders a container for displaying items, typically used for cryptocurrency data.

#### Props:

- `data` (array): Array of items to be displayed. Each item should contain necessary data for rendering.

### Description Html

#### Functionality:

Renders HTML content within a container with customizable styles.

#### Props:

- `htmlString` (string): HTML content to be rendered within the component.

### Grpahic

#### Functionality:

Renders a responsive line chart using Recharts library, with customizable tooltip and legend.

#### Props:

- `data` (array): Array of objects containing data points for the chart. Each object should have the following shape:
  - `timestamp` (string): Timestamp of the data point.
  - `price` (number): Price data.
  - `volume` (number): Volume data.

### Item

#### Functionality:

Renders an item card displaying cryptocurrency information, including name, symbol, price change, and percentage change. It also provides a link to view more details.

#### Props:

- `data` (object): Object containing cryptocurrency information with the following properties:
- `name` (string): Name of the cryptocurrency.
- `symbol` (string): Symbol of the cryptocurrency.
- `image` (string): URL of the cryptocurrency's image.
- `price_change_24h` (number): Price change in the last 24 hours.
- `price_change_percentage_24h` (number): Percentage change in the last 24 hours.
- `id` (string): Unique identifier of the cryptocurrency.

### Money

#### Functionality:

Formats a monetary amount according to the specified currency using the Intl.NumberFormat API.

#### Props:

- `amount` (number): The monetary amount to be formatted.
- `currency` (string): The currency code (e.g., "USD", "EUR") to specify the currency format.

### Show

#### Functionality:

Conditional rendering component that renders its children based on the truthiness of the provided condition. It mimics the behavior of if-else statements in JSX.

#### Props:

- `children` (node): The children components or elements wrapped by the Show component.
- `isTrue` (boolean): A boolean value indicating whether to render the children of the When component.

## Folder "hooks"

This folder contains custom hooks used to componentize logic and reuse it in different parts of the application.

### Use Create BreadCrumbs

#### Functionality:

- Uses the `useContext` hook to access the `BreadCrumbContext`.
- Sets the initial breadcrumbs using the `updateBreadcrumbs` function from the context.
- Clears breadcrumbs when the component unmounts by returning a cleanup function in the useEffect hook.
- Returns `breadcrumbs` and `updateBreadcrumbs` from the context.

#### Props:

- `initialCrumbs` (array): An array containing the initial breadcrumb items.
- `update` (any): Any value that triggers an update in the useEffect hooks.

## Folder "helpers"

### Helper Functions Summary:

1. **convertToPercentage(number):**

   - Converts a number to a percentage format.
   - If the number is less than 1, it multiplies it by 100.
   - Returns the percentage formatted to two decimal places with a percentage sign.

2. **mergeChartData(marketCaps, prices, totalVolumes):**

   - Merges data from market caps, prices, and total volumes arrays.
   - Formats timestamps into human-readable date format.
   - Searches for corresponding price and volume data based on timestamps.
   - Creates objects containing timestamp, price, volume, and market cap information.
   - Returns an array containing the merged data.

3. **weiToEther(wei):**
   - Converts a value from Wei to Ether.
   - Divides the input value by 10^18 to convert it to Ether.
   - Rounds the resulting Ether value to two decimal places.

## Folder "layout"

Contains the project's layout, defining the layout of the main elements of the user interface.
The `Layout` component structures the application layout, containing header, main content, and footer sections.

- **Inputs:**

  - `children`: Content to be displayed within the layout.

- **Functionality:**

  - Renders header and footer components.
  - Centers main content horizontally and vertically.

- **PropTypes:**
  - `children`: PropTypes.node.

## Folder "pages"

Here are the main pages of the application, each representing a different view of it.

### Home

##### Functionality

- Fetches cryptocurrency data for the top 10 coins using React Query and an external API.
- Displays loading indicator while fetching data.
- Handles error cases when fetching data fails or endpoint state is inactive.
- Renders a list of top 10 coins using the `ContanierItems` component.

### Details

The `Details` component is responsible for displaying detailed information about a specific cryptocurrency. It fetches data from external APIs using React Query and renders the information accordingly. This component is typically used in the context of a cryptocurrency details page.

##### Functionality

- Fetches cryptocurrency details and chart data using React Query and external API calls.
- Manages breadcrumb navigation using the `useCreateBreadCrumbs` hook.
- Renders loading, error, or detailed information based on the API fetch status and user state.
- Displays the cryptocurrency name and detailed information using the `ContainerDetails` component.

## Folder "reduxes"

Contains global states consumed throughout the application, along with functions related to handling these states using Redux.

### Slices

#### App Slice

- Manages the state related to the activation status of an endpoint.
- Provides action creators to set the endpoint as active or inactive.

##### Actions

- `setEndpointActive`: Action to set the endpoint as active.
- `setEndpointInactive`: Action to set the endpoint as inactive.

#### Metamask Slice

- Manages the state related to the MetaMask wallet integration.
- Provides actions to update wallet information, connection status, and error messages.

##### Actions

- `setWallet`: Updates the wallet information.
- `setHasProvider`: Updates the provider availability status.
- `setIsConnecting`: Sets the connection status.
- `setErrorMessage`: Sets an error message.
- `clearError`: Clears the error message.
- `setConnected`: Sets the connection status.

### Store

- Configures the Redux store using Redux Toolkit.
- Combines multiple slices of state into a single root reducer.
- Creates and exports the Redux store instance.

## Folder "services"

This folder contains API calls, encapsulated in services to facilitate reuse and maintenance.

- Contains functions to interact with the CoinGecko API.
- Handles API requests for checking endpoint status, fetching cryptocurrencies, and retrieving cryptocurrency details and charts.

### Available Functions

1. **checkEndpointStatus**: Checks the status of the API endpoint.
2. **getCryptos**: Fetches the top 10 cryptocurrencies.
3. **getCryptoDetails**: Fetches details of a specific cryptocurrency.
4. **getCryptoDetailsChart**: Fetches chart data for a specific cryptocurrency.

## Folder "ui-components"

Contains UI/UX components, those used to build the user interface and that do not have associated business logic.

### Breadcrumbs

#### Functionality

- Renders a breadcrumb navigation component.
- Supports dynamic breadcrumb items with optional click handlers and disabled states.
- Provides a link to navigate back to the home page.

#### Props

- **crumbs**: An array of objects representing each breadcrumb item.
- **name**: (Required) The text to display for the breadcrumb item.
- **path**: The URL path to navigate to when the breadcrumb item is clicked.
- **onClick**: Optional function to execute when the breadcrumb item is clicked.
- **disabled**: Boolean indicating whether the breadcrumb item is disabled (default: false).

### Button

#### Functionality

- Renders a button with optional text and icon.
- Supports different sizes: small (sm), medium (md), large (lg), and extra-large (xl).
- Provides an onClick event handler and disabled state.

#### Props

- **text**: (Optional) The text to display on the button.
- **icon**: (Optional) An icon element to display alongside the text.
- **onClick**: (Optional) Function to execute when the button is clicked.
- **disabled**: (Optional) Boolean indicating whether the button is disabled.
- **size**: (Optional) Size of the button. Can be one of: "sm", "md", "lg", "xl".

### Error

#### Functionality

- Displays an error message with a title and description text.

#### Props

- **title**: The title of the error message.
- **text**: The description text of the error message.

### Info Tabel

#### Functionality

- Displays information about cryptocurrency prices and changes in a table format.
- Includes price change, high and low for the last 24 hours, total volume, and price change percentage.

#### Props

- **info**: Object containing information about cryptocurrency prices and changes.
- **price_change_24h**: Price change in the last 24 hours.
- **high_24h**: Object containing high prices for the last 24 hours.
- **low_24h**: Object containing low prices for the last 24 hours.
- **total_volume**: Object containing total volume information.
- **price_change_percentage_24h**: Price change percentage in the last 24 hours.
- **symbol**: Symbol of the cryptocurrency.

### Loading

#### Functionality

- Displays a loading spinner to indicate that content is being loaded or processed.

### Navbar

FALTA EN MOBILE

### Percentage

#### Functionality

- Renders a percentage value with appropriate styling based on its positive or negative nature.

### Status Account

#### Functionality

- Displays the status of the user's Ethereum account connection.
- Shows the balance of Ethereum if the account is connected.
- Shows an error message if the account connection fails.

### Tables

#### Tabel

##### Functionality

- Renders a table component with customizable data, columns, and row rendering.
- Provides options for border styling and header color customization.

##### Props

- `data` (array): Array of data to populate the table.
- `columns` (array): Array of column names.
- `renderRow` (function): Function to render each row of data.
- `borderTop` (boolean): Indicates whether the table should have a top border. - Default is true.
- `borderContainer` (boolean): Indicates whether the table should have a border - container. Default is false.
- `header` (string): Header color style. Default is "grey".

#### Tabel Row

##### Functionality:

Renders a table row with the specified children, index, class name, and type.

##### Props:

- `children` (node): Content to be rendered inside the table row.
- `index` (number): Index of the table row.
- `className` (string): Additional CSS class names to be applied to the table row.
- `type` (string): Type of the table row.

#### Tabel Cell

##### Functionality:

Renders a table cell with the specified content, alignment, and styles.

##### Props:

- `children` (node): Content to be rendered inside the table cell.
- `className` (string): Additional CSS class names to be applied to the table cell.
- `align` (oneOf): Text alignment within the table cell. Can be "left", "center", or "right". Default is "center".
- `style` (object): Custom styles to be applied to the table cell.
- `levelPadding` (oneOf): Level of padding for the table cell. Can be "low" or "normal".

### Title

#### Functionality:

Renders a title with the specified text, heading level, alignment, and custom class.

#### Props:

- `text` (string): The text content of the title.
- `level` (number): The heading level, ranging from 1 to 6.
- `align` (string): The alignment of the title text. Default is "center".
- `customClass` (string): Additional CSS class names to be applied to the title.
