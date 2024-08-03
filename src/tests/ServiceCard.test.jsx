// ServiceCard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ServiceCard from '../modules/public/components/ServiceCard';

// Mock icon for testing
const mockIcon = '../assets/svg/dropbox.svg';

describe('ServiceCard', () => {
  it('renders the service card with default props', () => {
    render(<ServiceCard icon={mockIcon} />);

    expect(screen.getByAltText('SVG')).toHaveAttribute('src', mockIcon);
    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Descriptions.../i)).toBeInTheDocument();
  });

  it('renders the service card with provided props', () => {
    const title = 'Service Title';
    const descriptions = 'Detailed description of the service.';
    render(<ServiceCard title={title} descriptions={descriptions} icon={mockIcon} />);

    expect(screen.getByAltText('SVG')).toHaveAttribute('src', mockIcon);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(descriptions)).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<ServiceCard title="Snapshot Test" descriptions="Snapshot description" icon={mockIcon} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
