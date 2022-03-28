Feature:
  Background:
    Given I Open Lego Web Site
    When I Open Bestseller Page
    Then I Check That Bestseller Page Is Opened

  Scenario Outline:
    When I Add All Items Into DB
    Then I Check DB Items With "<filter>" Items

  Examples:
    |filter  |
    |low-high|
    |high-low|